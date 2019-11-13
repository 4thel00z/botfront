import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    Segment, Input, Dropdown, Button, Accordion, Label,
} from 'semantic-ui-react';
import momentPropTypes from 'react-moment-proptypes';
import DatePicker from '../common/DatePicker';


const ConversationFilters = ({
    lengthFilter,
    xThanLength,
    confidenceFilter,
    xThanConfidence,
    actionFilters,
    changeFilters,
    startDate,
    endDate,
    actionsOptions,
    setActionOptions,
}) => {
    const [newLengthFilter, setNewLengthFilter] = useState({ compare: lengthFilter, xThan: xThanLength });
    const [newConfidenceFilter, setNewConfidenceFilter] = useState({ compare: confidenceFilter * 100, xThan: xThanConfidence });
    const [newActionFilters, setNewActionFilters] = useState(actionFilters);
    const [newStartDate, setNewStartDate] = useState(startDate);
    const [newEndDate, setNewEndDate] = useState(endDate);
    const [activeAccordion, setActiveAccordion] = useState(true);

    useEffect(() => setNewActionFilters(actionFilters), [actionFilters]);
    const filterLengthOptions = [
        { value: 'greaterThan', text: 'Greater than' },
        { value: 'lessThan', text: 'Less than' },
        { value: 'equals', text: 'Equals' },
    ];
    /*
    might be useful if more options are needed for the confidence
    const filterConfidenceOptions = [
        { value: 'lessThan', text: 'Less than' },
    ]; */

    const setNewDates = (incomingStartDate, incomingEndDate) => {
        setNewStartDate(incomingStartDate);
        setNewEndDate(incomingEndDate);
    };

    const applyFilters = () => {
        changeFilters(newLengthFilter, newConfidenceFilter, newActionFilters, newStartDate, newEndDate);
    };

    const resetFilters = () => {
        changeFilters({ compare: -1, xThan: 'greaterThan' }, { compare: -1, xThan: 'greaterThan' }, [], null, null);
    };

    const handleAccordionClick = () => {
        setActiveAccordion(!activeAccordion);
    };

    const addNewOption = (newOption) => {
        const optionObject = { key: newOption, value: newOption, text: newOption };
        setActionOptions([...actionsOptions, optionObject]);
    };

    return (
        <Accordion>
            <Accordion.Title
                active={activeAccordion}

            >
                <Button
                    content={activeAccordion ? 'Hide Filters' : 'Reveal Filters'}
                    onClick={() => handleAccordionClick()}
                    data-cy='toggle-filters'
                />
            </Accordion.Title>
            <Accordion.Content active={activeAccordion}>
                <div className='conversation-filter-container'>
                    <div className='conversation-filter' data-cy='length-filter'>
                        <b>Filter by conversation length</b>
                        <Segment.Group horizontal>
                            <Segment className='x-than-filter'>
                                <Dropdown
                                    className='filter-dropdown'
                                    options={filterLengthOptions}
                                    selection
                                    fluid
                                    value={newLengthFilter.xThan}
                                    onChange={(e, { value }) => setNewLengthFilter({ ...newLengthFilter, xThan: value })}
                                />
                            </Segment>
                            <Segment className='number-filter'>
                                <Input
                                    value={newLengthFilter.compare > 0 ? newLengthFilter.compare : ''}
                                    onChange={(e, { value }) => setNewLengthFilter({ ...newLengthFilter, compare: value })}
                                />
                            </Segment>
                        </Segment.Group>
                    </div>
                    <div className='conversation-filter' data-cy='confidence-filter'>
                        <b>Filter by confidence level</b>
                        <Segment.Group horizontal>
                            <Segment className='x-than-filter'>
                                <Label> Less Than</Label>
                            </Segment>
                            <Segment className='number-filter'>
                                <Input
                                    value={newConfidenceFilter.compare > 0 ? newConfidenceFilter.compare : ''}
                                    onChange={(e, { value }) => setNewConfidenceFilter({ ...newConfidenceFilter, compare: value })}
                                />
                            </Segment>
                            <Segment className='static-symbol'>
                                <p>
                                    %
                                </p>
                            </Segment>
                        </Segment.Group>
                    </div>

                    <div className='conversation-filter' data-cy='date-filter'>
                        <b>Filter by date</b>
                        <Segment className='date-filter'>
                            <DatePicker

                                position='bottom left'
                                startDate={newStartDate}
                                endDate={newEndDate}
                                onConfirm={setNewDates}
                            />
                        </Segment>
                    </div>

                    <div className='conversation-filter reset'>
                        <Segment className='filter-button'>
                            <Button data-cy='reset-filters' secondary onClick={() => resetFilters()}> Reset filters</Button>
                        </Segment>
                    </div>
                    <div className='conversation-filter apply'>
                        <Segment className='filter-button'>
                            <Button data-cy='apply-filters' primary onClick={() => applyFilters()}> Apply filters</Button>
                        </Segment>
                    </div>
                    <div className='conversation-filter actions' data-cy='action-filter'>
                        <b>Filter by actions</b>
                        <Segment className='action-filter'>
                            <Dropdown
                                className='filter-dropdown multi-select'
                                placeholder='Action name'
                                fluid
                                multiple
                                search
                                selection
                                onChange={(e, { value }) => { setNewActionFilters(value); }}
                                value={newActionFilters}
                                additionLabel='Add: '
                                noResultsMessage='Type to add action filters'
                                allowAdditions
                                onAddItem={(_, { value }) => addNewOption(value)}
                                options={actionsOptions}
                            />
                        </Segment>
                    </div>
                </div>
            </Accordion.Content>
        </Accordion>
    );
};

ConversationFilters.propTypes = {
    lengthFilter: PropTypes.number.isRequired,
    xThanLength: PropTypes.string.isRequired,
    confidenceFilter: PropTypes.number.isRequired,
    xThanConfidence: PropTypes.string.isRequired,
    changeFilters: PropTypes.func.isRequired,
    actionFilters: PropTypes.array,
    startDate: momentPropTypes.momentObj,
    endDate: momentPropTypes.momentObj,
    actionsOptions: PropTypes.array,
    setActionOptions: PropTypes.func.isRequired,
};

ConversationFilters.defaultProps = {
    startDate: null,
    endDate: null,
    actionFilters: [],
    actionsOptions: [],
};

export default ConversationFilters;
