import React from 'react';
import { render } from 'react-dom';
import {
    Router, Route, IndexRoute, browserHistory,
} from 'react-router';
import DocumentTitle from 'react-document-title';
import { Meteor } from 'meteor/meteor';
import { Provider } from 'react-redux';
// comment
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
import apolloClient from './apollo';

import TemplatesContainer from '../../ui/components/templates/templates-list/Templates';
import TemplateContainer from '../../ui/components/templates/template-upsert/Template';
import SettingsContainer from '../../ui/components/admin/settings/Settings';
import ForgotPassword from '../../ui/components/account/ForgotPassword.jsx';
import StoriesContainer from '../../ui/components/stories/StoriesContainer';
import ConfigurationContainer from '../../ui/components/settings/Settings';
import ResetPassword from '../../ui/components/account/ResetPassword.jsx';
import NLUModelComponent from '../../ui/components/nlu/models/NLUModel';
import SetupSteps from '../../ui/components/setup/SetupSteps';
import Welcome from '../../ui/components/setup/Welcome';
import Login from '../../ui/components/account/Login';
import Incoming from '../../ui/components/incoming/Incoming';

import { can, areScopeReady } from '../../lib/scopes';
import AccountLayout from '../../ui/layouts/account';
import NotFound from '../../ui/components/NotFound';
import SetupLayout from '../../ui/layouts/setup';
import Project from '../../ui/layouts/project';
import Index from '../../ui/components/index';
import store from '../../ui/store/store';

import ProjectsListContainer from '../../ui/components/admin/Projects';
import ProjectContainer from '../../ui/components/admin/Project';
import UsersListContainer from '../../ui/components/admin/Users';
import UserContainer from '../../ui/components/admin/User';
import RoleContainer from '../../ui/components/admin/Role';
import RolesList from '../../ui/components/admin/Roles';
import AdminLayout from '../../ui/layouts/admin';

import AnalyticsContainer from '../../ui/components/analytics/AnalyticsContainer';

const getScope = (scope, nextState) => {
    if (scope === 'GLOBAL' || scope === null) return null;
    if (scope === 'anyScope') return { anyScope: true };
    if (scope === undefined) return nextState.params.project_id;
    return null; // default to global scope
};

const authenticate = (role, options = {}) => (nextState, replace, callback) => {
    const { scope: scopeSetting } = options;
    const scope = getScope(scopeSetting, nextState);
    Tracker.autorun(() => {
        if (areScopeReady()) {
            if (!Meteor.loggingIn() && !Meteor.userId()) {
                replace({
                    pathname: '/login',
                    state: { nextPathname: nextState.location.pathname },
                });
            } else if (
                !can(role, scope)
                && !can('global-admin')
            ) {
                replace({
                    pathname: '/403',
                    state: { nextPathname: nextState.location.pathname },
                });
            }
            callback();
        }
    });
};

const authenticateAdminPage = () => (nextState, replace, callback) => {
    Tracker.autorun(() => {
        if (areScopeReady()) {
            if (!Meteor.loggingIn && !Meteor.userId()) {
                replace({
                    pathname: '/403',
                    state: { nextPathname: nextState.location.pathname },
                });
            } else if (!can(['users:r', 'roles:r', 'global-settings:r'], { anyScope: true })
                && !can(['projects:r'])
            ) {
                replace({
                    pathname: '/403',
                    state: { nextPathname: nextState.location.pathname },
                });
            }
            callback();
        }
    });
};

Meteor.startup(() => {
    render(
        <DocumentTitle title='Botfront.'>
            <ApolloProvider client={apolloClient}>
                <ApolloHooksProvider client={apolloClient}>
                    <Provider store={store}>
                        <Router history={browserHistory}>
                            <Route exact path='/setup' component={SetupLayout}>
                                <Route path='/setup/welcome' component={Welcome} name='Welcome' />
                                <Route path='/setup/account' component={SetupSteps} name='Account' />
                            </Route>
                            <Route exact path='/' component={AccountLayout}>
                                <IndexRoute component={Index} />
                                <Route path='/login' component={Login} name='Login' />
                                {/* <Route path="/signup" component={ Signup } onEnter={ logout } name='Signup' /> */}
                                {/* <Route path="/create-project" component={ CreateProjectComponent } onEnter={ authenticate } name='Create Project' /> */}
                                <Route path='/forgot-password' component={ForgotPassword} name='Forgot Password' />
                                <Route path='/reset-password/:token' component={ResetPassword} name='Reset Password' />
                                <Route path='/enroll-account/:token' component={ResetPassword} name='Reset Password' />
                            </Route>
                            <Route exact path='/project' component={Project}>
                                <Route path='/project/:project_id/nlu/models' component={NLUModelComponent} name='NLU Models' onEnter={authenticate('nlu-data:r')} />
                                <Route path='/project/:project_id/nlu/model/:model_id' component={NLUModelComponent} name='NLU Models' onEnter={authenticate('nlu-data:r')} />
                                <Route path='/project/:project_id/incoming' component={Incoming} name='Incoming' onEnter={authenticate('incoming:r')} />
                                <Route
                                    path='/project/:project_id/incoming/:model_id'
                                    component={Incoming}
                                    name='Incoming'
                                    onEnter={authenticate('incoming:r')}
                                />
                                <Route
                                    path='/project/:project_id/incoming/:model_id/:tab'
                                    component={Incoming}
                                    name='Incoming'
                                    onEnter={authenticate('incoming:r')}
                                />
                                <Route
                                    path='/project/:project_id/incoming/:model_id/:tab/:page'
                                    component={Incoming}
                                    name='Incoming'
                                    onEnter={authenticate('incoming:r')}
                                />
                                <Route
                                    path='/project/:project_id/incoming/:model_id/:tab/:page/:selected_id'
                                    component={Incoming}
                                    name='Incoming'
                                    onEnter={authenticate('incoming:r')}
                                />
                                <Route path='/project/:project_id/stories' component={StoriesContainer} name='Stories' onEnter={authenticate('stories:r')} />
                                <Route path='/project/:project_id/dialogue/templates' component={TemplatesContainer} name='Templates' onEnter={authenticate('responses:r')} />
                                <Route path='/project/:project_id/dialogue/templates/add' component={TemplateContainer} name='Template' onEnter={authenticate('responses:w')} />
                                <Route path='/project/:project_id/dialogue/template/:template_id' component={TemplateContainer} name='Template' onEnter={authenticate('responses:w')} />
                                <Route path='/project/:project_id/analytics' component={AnalyticsContainer} name='Analytics' onEnter={authenticate('analytics:r')} />
                                <Route path='/project/:project_id/settings' component={ConfigurationContainer} name='Settings' onEnter={authenticate('projects:r')} />
                                <Route path='/project/:project_id/settings/global' component={SettingsContainer} name='More Settings' onEnter={authenticate('global-settings:r')} />
                                <Route path='*' component={NotFound} />
                            </Route>
                            <Route exact path='/admin' component={AdminLayout} onEnter={authenticateAdminPage()}>
                                <Route path='/admin/projects' component={ProjectsListContainer} name='Projects' onEnter={authenticate('projects:r', { scope: 'anyScope' })} />
                                <Route path='/admin/project/:project_id' component={ProjectContainer} name='Project' onEnter={authenticate('projects:w', { scope: 'GLOBAL' })} />
                                <Route path='/admin/project/add' component={ProjectContainer} name='Project' onEnter={authenticate('projects:w', { scope: 'GLOBAL' })} />
                                <Route path='/admin/users' component={UsersListContainer} name='Users' onEnter={authenticate('users:r', { scope: 'anyScope' })} />
                                <Route path='/admin/user/:user_id' component={UserContainer} name='Edit User' onEnter={authenticate('users:r', { scope: 'anyScope' })} />
                                <Route path='/admin/settings' component={SettingsContainer} name='Settings' onEnter={authenticate('global-settings:r', { scope: 'anyScope' })} />
                                <Route path='/admin/roles' component={RolesList} name='Roles' onEnter={authenticate('roles:r', { scope: 'anyScope' })} />
                                <Route path='/admin/role/:role_name' component={RoleContainer} name='Edit Role' onEnter={authenticate('roles:r', { scope: 'anyScope' })} />
                                <Route path='/admin/role/' component={RoleContainer} name='Create Role' onEnter={authenticate('roles:w', { scope: 'anyScope' })} />
                                <Route path='/admin/user/add' component={UserContainer} name='Add User' onEnter={authenticate('users:w', { scope: 'anyScope' })} />
                            </Route>
                            <Route path='*' exact component={NotFound} />
                        </Router>
                    </Provider>
                </ApolloHooksProvider>
            </ApolloProvider>
        </DocumentTitle>,
        document.getElementById('render-target'),
    );
});
