import moment from 'moment';
import _ from 'lodash';

export const MONDAY = 'Monday';
export const TUESDAY = 'Tuesday';
export const WEDNESDAY = 'Wednesday';
export const THURSDAY = 'Thursday';
export const FRIDAY = 'Friday';
export const SATURDAY = 'Saturday';
export const SUNDAY = 'Sunday';

export const ALL_WEEK_DAYS = [MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY];

export const getDaysOfWeek = (date, week) => {
    return _.filter(getDaysOfMonth(date), { week });
};

export const getTodaysMonth = () => {
    return moment().startOf('month');
};

export const getDaysDiffInWeek = (from, to) => {
    const fromDay = moment(from).startOf('day');
    const toDay = moment(to).startOf('day');
    const endOfCurrentWeek = moment(fromDay).startOf('isoweek').day(7);

    if (toDay.isAfter(endOfCurrentWeek)) {
        return endOfCurrentWeek.diff(fromDay, 'days') + 1;
    }

    return toDay.diff(fromDay, 'days') + 1;
};

const getDaysOfMonth = (date) => {
    const currentMonth = moment(date).startOf('month');

    return _.times(
        currentMonth.daysInMonth(),
        (dayInMonth) => {
            const day = moment(currentMonth).add(dayInMonth, 'day');

            return {
                'dayName': day.format('dddd'),
                'day': day.format('D'),
                'date': day.format('YYYY-MM-DD'),
                'week': weekOfMonth(day)
            };
        }
    );
};

const weekOfMonth = (date) => {
    return moment(date).isoWeek() - moment(date).startOf('month').isoWeek();
};