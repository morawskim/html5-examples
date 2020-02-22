import React, {useState} from "react";
import moment from "moment";
import {FocusedInputShape} from 'react-dates';
import AirbnbCalendar from "./AirbnbCalendar";

const Calendar: React.FC = (props) => {
    const [dateRangeTuple, setDateRangeTuple] = useState<[moment.Moment|null, moment.Moment|null]>([moment(), moment()]);
    const [focusedInput, setFocusedInput] = useState<FocusedInputShape>('startDate');

    return (
        <AirbnbCalendar
            startDate={dateRangeTuple[0]} // momentPropTypes.momentObj or null,
            endDate={dateRangeTuple[1]} // momentPropTypes.momentObj or null,
            onDatesChange={({ startDate, endDate }) => setDateRangeTuple([startDate, endDate])} // PropTypes.func.isRequired,
            focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => setFocusedInput(focusedInput === null ? 'startDate' : focusedInput)} // PropTypes.func.isRequired,
            initialVisibleMonth={undefined} // PropTypes.func or null,
            hideKeyboardShortcutsPanel={true}
        />
    );
};

export default Calendar;
