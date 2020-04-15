import gql from 'graphql-tag';

const dashboardFields = gql`
    fragment DashboardFields on AnalyticsDashboard {
        _id
        name
        projectId
        cards {
            name
            type
            visible
            startDate
            endDate
            chartType
            valueType
            include
            exclude
            wide
        }
        languages
        envs
    }
`;

export const LIST_DASHBOARDS = gql`
    query($projectId: String!) {
        listDashboards(projectId: $projectId) {
            ...DashboardFields
        }
    }
    ${dashboardFields}
`;

export const UPDATE_DASHBOARD = gql`
    mutation(
        $projectId: String!
        $_id: String!
        $name: String
        $cards: [Any]
        $languages: [String]
        $envs: [String]
    ) {
        updateDashboard(
            projectId: $projectId
            _id: $_id
            name: $name
            cards: $cards
            languages: $languages
            envs: $envs
        ) {
            ...DashboardFields
        }
    }
    ${dashboardFields}
`;
