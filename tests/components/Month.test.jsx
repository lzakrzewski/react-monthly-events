import React from 'react';
import { render } from 'enzyme';
import MonthlyEvents from '../../src/components/Month';
import moment from 'moment';

test('can display monthly view for moment', () => {
    const currentMonth = moment('2017-02-01');

    const monthlyView = render(<MonthlyEvents currentMonth={ currentMonth } events={[]}/>);

    expect(monthlyView.text()).toContain('12345678910111213141516171819202122232425262728');
    expect(monthlyView.text()).not.toContain('29');
});

test('can display monthly view for string', () => {
    const currentMonth = '2017-02-01';

    const monthlyView = render(<MonthlyEvents currentMonth={ currentMonth } events={[]}/>);

    expect(monthlyView.text()).toContain('12345678910111213141516171819202122232425262728');
    expect(monthlyView.text()).not.toContain('29');
});

test('can display monthly view for Date', () => {
    const currentMonth = new Date('2017-02-01');

    const monthlyView = render(<MonthlyEvents currentMonth={ currentMonth } events={[]}/>);

    expect(monthlyView.text()).toContain('12345678910111213141516171819202122232425262728');
    expect(monthlyView.text()).not.toContain('29');
});
