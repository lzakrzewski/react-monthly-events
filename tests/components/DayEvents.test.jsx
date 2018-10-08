import React from "react";
import {shallow} from "enzyme";
import moment from "moment";
import DayEvents from "../../src/components/DayEvents";

test('can render empty div when no day events ', () => {
    const day = shallow(<DayEvents day={moment('2017-01-01')} events={[]} />);

    expect(day.text()).toEqual('');
});

test('can render div with day events', () => {
    const events = [
        { id: 'event-1', start: '2017-01-01', allDay: false, event: 'Learn ReactJS'},
        { id: 'event-2', start: '2017-01-01 00:01:00', end: '2018-01-31 00:01:00', allDay: false, event: 'Go home'},
        { id: 'event-out', start: '2017-01-01', allDay: true, event: 'Event out'},
    ];

    const day = shallow(<DayEvents day={moment('2017-01-01')} events={events} />);

    expect(day.text()).toContain('Learn ReactJS');
    expect(day.text()).toContain('Go home');
    expect(day.text()).not.toContain('Event out');
});
