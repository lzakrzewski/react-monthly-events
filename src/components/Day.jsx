import React, {Component} from 'react';
import './Day.css';
import AllDayEvents from './AllDayEvents';
import DayEvents from './DayEvents';

export default class Day extends Component {
    render() {
        if (!this.props.day) {
            return <div className="Day" />;
        }

        return (
            <div className="Day">
                <div className="day">
                    {this.props.day.format('D')}
                </div>
                <AllDayEvents day={this.props.day} events={this.props.events} />
                <DayEvents day={this.props.day} events={this.props.events} />
            </div>
        );
    }
}
