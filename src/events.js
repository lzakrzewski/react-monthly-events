import moment from 'moment';
import _ from 'lodash';

export const dayEvents = (date, events) => {
    const day = moment(date).startOf('day');

    return _.orderBy(
        _.filter(
            events,
            (event) => {
                if (event.allDay) {
                    return false;
                }

                return moment(event.start).startOf('day').isSame(day);
            }
        ),
        ['start'],
        ['asc']
    );
};

export const allDayEvents = (date, events) => {
    const day = moment(date).startOf('day');

    return _.orderBy(
        _.filter(
            events,
            (event) => {
                if (!event.allDay) {
                    return false;
                }

                if (moment(event.start).startOf('day').isSame(day)) {
                    return true;
                }

                if (!event.end) {
                    return false;
                }

                return day.isBetween(moment(event.start), moment(event.end));
            }
        ),
        ['start'],
        ['asc']
    );
};
