import React from 'react';
import { mount } from 'enzyme';
import Week from '../../src/components/Week';
import moment from 'moment';

test('can render 7 days week', () => {
    const events = {};
    const currentMonth = moment('2018-07-11');

    const week = mount(<table><tbody><Week currentMonth={currentMonth} events={events} week={1} /></tbody></table>);

    expect(week.text()).toContain('2');
    expect(week.text()).toContain('3');
    expect(week.text()).toContain('4');
    expect(week.text()).toContain('5');
    expect(week.text()).toContain('6');
    expect(week.text()).toContain('7');
    expect(week.text()).toContain('8');
});

test('can render 1 days week', () => {
    const events = {};
    const currentMonth = moment('2018-07-11');

    const week = mount(<table><tbody><Week currentMonth={currentMonth} events={events} week={0} /></tbody></table>);

    expect(week.text()).toContain('1');
});
