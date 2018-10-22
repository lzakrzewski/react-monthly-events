import React, {Component} from 'react';
import * as events from '../events';
import _ from 'lodash';
import moment from 'moment';
import './Day.css';

export default class DayEvents extends Component {
    getEventColor = (event, events) => {
        const colors = [
            'warning',
            'primary',
            'secondary',
            'danger',
            'info',
            'success',
        ];

        const index = _.indexOf(_.values(events), event);

        return colors[index % 5];
    };

    render() {
        const dayEvents = events.dayEvents(this.props.day, this.props.events);

        return (
            <div>
                { dayEvents.length > 0 &&
                    <ul className="list-unstyled events day-events">
                        { _.map(
                            dayEvents,
                            (event) => {
                                return (
                                    <li key={event.id}>
                                        <span className={`dot bg-${this.getEventColor(event, this.props.events)}`} />
                                        <span className="start">{moment(event.start).format('hh:mm')}</span>
                                        <span>{ event.event }</span>
                                    </li>
                                );
                            })
                        }
                    </ul>
                }
            </div>
        );
    }
}
