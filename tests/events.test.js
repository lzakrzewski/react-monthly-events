import { dayEvents, allDayEvents } from '../src/events';
import moment from 'moment';

describe('dayEvents', () => {
    it('can extract current day events from monthly events', () => {
        const events = {
            'event-in-1': {
                id: 'event-in-1',
                start: '2017-01-01'
            },
            'event-in-2': {
                id: 'event-in-2',
                start: '2017-01-01 00:54:33'
            },
            'event-out': {
                id: 'event-out',
                start: '2017-03-01'
            },
        };

        expect(dayEvents(moment('2017-01-01 04:32:01'), events)).toEqual(
            [
                {
                    id: 'event-in-1',
                    start: '2017-01-01'
                },
                {
                    id: 'event-in-2',
                    start: '2017-01-01 00:54:33'
                },
            ]
        );
    });

    it('dateEvents function excludes all day events', () => {
        const events = {
            'event-in-1': {
                id: 'event-in-1',
                start: '2017-01-01'
            },
            'event-in-2': {
                id: 'event-in-2',
                start: '2017-01-01 00:54:33',
                allDay: false,
            },
            'event-out': {
                id: 'event-out',
                start: '2017-01-01',
                allDay: true,
            },
        };

        expect(dayEvents(moment('2017-01-01 04:32:01'), events)).toEqual(
            [
                {
                    id: 'event-in-1',
                    start: '2017-01-01'
                },
                {
                    id: 'event-in-2',
                    start: '2017-01-01 00:54:33',
                    allDay: false,
                },
            ]
        );
    });

    it('returns sorted array of events for given day', () => {
        const events = {
            'event-1': {
                id: 'event-1',
                start: '2017-01-01 00:00:01'
            },
            'event-2': {
                id: 'event-2',
                start: '2017-01-01 23:59:57'
            },
            'event-3': {
                id: 'event-3',
                start: '2017-01-01'
            },
            'event-out': {
                id: 'event-out',
                start: '2017-01-02 00:00:01'
            },
        };

        expect(dayEvents(moment('2017-01-01 04:32:01'), events)).toEqual(
            [
                {
                    id: 'event-3',
                    start: '2017-01-01'
                },
                {
                    id: 'event-1',
                    start: '2017-01-01 00:00:01'
                },
                {
                    id: 'event-2',
                    start: '2017-01-01 23:59:57'
                },
            ]
        );
    });

    it('returns sorted array of all day events for given date', () => {
        const events = {
            'event-1': {
                id: 'event-1',
                start: '2017-01-01 00:00:01'
            },
            'event-2': {
                id: 'event-2',
                start: '2017-01-01 23:59:57'
            },
            'event-3': {
                id: 'event-3',
                start: '2017-01-01'
            },
            'event-out': {
                id: 'event-out',
                start: '2017-01-02 00:00:01'
            },
        };

        expect(dayEvents(moment('2017-01-01 04:32:01'), events)).toEqual(
            [
                {
                    id: 'event-3',
                    start: '2017-01-01'
                },
                {
                    id: 'event-1',
                    start: '2017-01-01 00:00:01'
                },
                {
                    id: 'event-2',
                    start: '2017-01-01 23:59:57'
                },
            ]
        );
    });

    it('returns empty when no events for given day', () => {
        const events = {
            'event-1': {
                id: 'event-1',
                start: '2017-01-01'
            },
            'event-2': {
                id: 'event-3',
                start: '2017-01-01 00:54:33'
            },
            'event-3': {
                id: 'event-3',
                start: '2017-01-01'
            },
        };

        expect(dayEvents(moment('2018-01-01 04:32:01'), events)).toEqual([]);
    });

    it('returns empty when no events', () => {
        expect(dayEvents(moment('2018-01-01 04:32:01'), {})).toEqual([]);
    });
});

describe('allDayEvents', () => {
    it('can extract all day events from given day', () => {
        const events = {
            'event-in-1': {
                id: 'event-in-1',
                start: '2017-01-01',
                allDay: true,
            },
            'event-in-2': {
                id: 'event-in-2',
                start: '2017-01-01 00:54:33',
                end: '2017-01-01 01:54:33',
                allDay: true,
            },
            'event-out-1': {
                id: 'event-out',
                start: '2017-03-01'
            },
            'event-out-2': {
                id: 'event-out',
                start: '2017-01-01',
                allDay: false,
            },
        };

        expect(allDayEvents(moment('2017-01-01 04:32:01'), events)).toEqual(
            [
                {
                    id: 'event-in-1',
                    start: '2017-01-01',
                    allDay: true,
                },
                {
                    id: 'event-in-2',
                    start: '2017-01-01 00:54:33',
                    end: '2017-01-01 01:54:33',
                    allDay: true,
                },
            ]
        );
    });

    it('can extract all day events that have range matching given day', () => {
        const events = {
            'event-in-1': {
                id: 'event-in-1',
                start: '2017-01-01',
                end: '2018-01-01',
                allDay: true,
            },
            'event-in-2': {
                id: 'event-in-2',
                start: '2017-01-01 00:54:33',
                end: '2017-06-01 00:54:33',
                allDay: true,
            },
            'event-out': {
                id: 'event-out',
                start: '2017-01-01 00:54:33',
                end: '2017-05-31 00:54:33',
                allDay: true,
            },
        };

        expect(allDayEvents(moment('2017-06-01 04:32:01'), events)).toEqual(
            [
                {
                    id: 'event-in-1',
                    start: '2017-01-01',
                    end: '2018-01-01',
                    allDay: true,
                },
                {
                    id: 'event-in-2',
                    start: '2017-01-01 00:54:33',
                    end: '2017-06-01 00:54:33',
                    allDay: true,
                },
            ]
        );
    });

    it('returns sorted array of all-day events for given day', () => {
        const events = {
            'event-1': {
                id: 'event-1',
                start: '2017-01-01 00:00:01',
                end: '2017-01-01 00:00:02',
                allDay: true,
            },
            'event-2': {
                id: 'event-2',
                start: '2017-01-01 23:59:57',
                end: '2017-01-02 00:00:001',
                allDay: true,
            },
            'event-3': {
                id: 'event-3',
                start: '2017-01-01',
                allDay: true,
            },
            'event-out': {
                id: 'event-out',
                start: '2017-01-02 00:00:01',
                allDay: false,
            },
        };

        expect(allDayEvents(moment('2017-01-01 04:32:01'), events)).toEqual(
            [
                {
                    id: 'event-3',
                    start: '2017-01-01',
                    allDay: true,
                },
                {
                    id: 'event-1',
                    start: '2017-01-01 00:00:01',
                    end: '2017-01-01 00:00:02',
                    allDay: true,
                },
                {
                    id: 'event-2',
                    start: '2017-01-01 23:59:57',
                    end: '2017-01-02 00:00:001',
                    allDay: true,
                },
            ]
        );
    });

    it('returns empty when no all-day events for given day', () => {
        const events = {
            'event-1': {
                id: 'event-1',
                start: '2017-01-01',
                end: '2017-01-02',
                allDay: true
            },
            'event-2': {
                id: 'event-3',
                start: '2017-01-01 00:54:33'
            },
            'event-3': {
                id: 'event-3',
                start: '2017-01-01 00:54:33',
                end: '2017-01-01 01:55:33',
                allDay: false
            },
        };

        expect(allDayEvents(moment('2018-01-01 04:32:01'), events)).toEqual([]);
    });

    it('returns empty when no all-events', () => {
        expect(allDayEvents(moment('2018-01-01 04:32:01'), {})).toEqual([]);
    });
});
