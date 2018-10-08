import * as calendar from '../src/calendar';
import moment from 'moment';

describe('getTodaysMonth', () => {
    it('can return today\'s month moment representation', () => {
        const today = calendar.getTodaysMonth();

        expect(today).toEqual(moment().startOf('month'));
    });
});

describe('getDaysOfWeek', () => {
    it('can get days of first week from January 2017', () => {
        const days = calendar.getDaysOfWeek(moment('2017-01-05'), 0);

        expect(days).toEqual(
            [
                {
                    "day": "1",
                    "date": "2017-01-01",
                    "dayName": "Sunday",
                    "week": 0
                }
            ]
        );
    });

    it('can get days of last week from February 2018', () => {
        const days = calendar.getDaysOfWeek(moment('2018-02-05'), 4);

        expect(days).toEqual(
            [
                {
                    "day": "26",
                    "dayName": "Monday",
                    "date": "2018-02-26",
                    "week": 4
                },
                {
                    "day": "27",
                    "dayName": "Tuesday",
                    "date": "2018-02-27",
                    "week": 4
                },
                {
                    "day": "28",
                    "dayName": "Wednesday",
                    "date": "2018-02-28",
                    "week": 4
                },
            ]
        );
    });

    it('can get days of first week from December 2019', () => {
        const days = calendar.getDaysOfWeek(moment('2019-12-05'), 0);

        expect(days).toEqual(
            [
                {
                    "day": "1",
                    "dayName": "Sunday",
                    "date": "2019-12-01",
                    "week": 0
                }
            ]
        );
    });


    it('can return empty for invalid week number', () => {
        const days = calendar.getDaysOfWeek(moment('2018-02-05'), 55);

        expect(days).toEqual(
            []
        );
    });

    it('can return empty for invalid date', () => {
        const days = calendar.getDaysOfWeek(moment('2018-02-55'), 4);

        expect(days).toEqual(
            []
        );
    });
});

describe('getDaysDiffInWeek', () => {
    it('can return diff of days between two dates', () => {
        const diff = calendar.getDaysDiffInWeek(moment('2018-05-03'), moment('2018-05-06'));

        expect(diff).toEqual(4);
    });

    it('can return diff of days between two dates if end date is in next week', () => {
        const diff = calendar.getDaysDiffInWeek(moment('2018-05-24'), moment('2018-05-29'));

        expect(diff).toEqual(4);
    });

    it('can return diff of days between two dates if diff is 1', () => {
        const diff = calendar.getDaysDiffInWeek(moment('2018-05-03'), moment('2018-05-03'));

        expect(diff).toEqual(1);
    });
});