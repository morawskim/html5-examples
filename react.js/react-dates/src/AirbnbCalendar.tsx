import 'react-dates/initialize'; // necessary for latest version
import 'react-dates/lib/css/_datepicker.css';

import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
// @ts-ignore
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
// @ts-ignore
import DefaultTheme from 'react-dates/lib/theme/DefaultTheme';

import {
    DayPickerRangeController,
    DayPickerRangeControllerShape
} from 'react-dates';
import React from 'react';
import defaultsDeep from 'lodash/defaultsDeep';

var core = {
    primary: '#3f51b5',
    primaryShade_1: '#606fc7',
    primaryShade_2: '#8591d5',
    primaryShade_3: '#abb4e2',
    primaryShade_4: '#d1d6ef',
    primary_dark: '#32408f',
    secondary: '#007a87',
};

const theme = defaultsDeep({
    color: {
        core: core,
        hoveredSpan: {
            backgroundColor: core.primaryShade_4,
            backgroundColor_active: core.primaryShade_3,
            backgroundColor_hover: core.primaryShade_4,
            borderColor: core.primaryShade_3,
            borderColor_active: core.primaryShade_3,
            borderColor_hover: core.primaryShade_3,
            color: core.secondary,
            color_active: core.secondary,
            color_hover: core.secondary
        },
        selectedSpan: {
            backgroundColor: core.primaryShade_2,
            backgroundColor_active: core.primaryShade_1,
            backgroundColor_hover: core.primaryShade_1,
            borderColor: core.primaryShade_1,
            borderColor_active: core.primary,
            borderColor_hover: core.primary,
        },
        selected: {
            backgroundColor: core.primary,
            backgroundColor_active: core.primary,
            backgroundColor_hover: core.primary,
            borderColor: core.primary,
            borderColor_active: core.primary,
            borderColor_hover: core.primary,
        },
    },
}, DefaultTheme.reactDates);

ThemedStyleSheet.registerInterface(aphroditeInterface);
ThemedStyleSheet.registerTheme({reactDates: theme});

const AirbnbCalendar: React.FC<DayPickerRangeControllerShape> = (props) => {
    return (
        <DayPickerRangeController {...props} />
    );
};
export default AirbnbCalendar;
