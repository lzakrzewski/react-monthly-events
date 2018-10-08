import React from "react";
import {shallow} from "enzyme";
import moment from "moment";
import AllDayEvents from "../../src/components/AllDayEvents";

test('can render empty div when no all days events ', () => {
    const day = shallow(<AllDayEvents day={moment('2017-01-01')} events={[]} />);

    expect(day.text()).toEqual('');
});

test('can render div with all-day events', () => {
    const events = [
        { id: 'event-1', start: '2017-01-01', allDay: true, event: 'Learn ReactJS'},
        { id: 'event-2', start: '2016-12-31 00:01:00', end: '2018-01-31 00:01:00', allDay: true, event: 'Go home'},
        { id: 'event-out', start: '2017-01-01', allDay: false, event: 'Event out'},
    ];

    const day = shallow(<AllDayEvents day={moment('2017-01-01')} events={events} />);

    expect(day.text()).toContain('Learn ReactJS');
    expect(day.text()).toContain('Go home');
    expect(day.text()).not.toContain('Event out');
});
