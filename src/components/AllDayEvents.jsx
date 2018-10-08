import React, {Component} from "react";
import * as events from "../events";
import {getDaysDiffInWeek} from "../calendar";
import _ from "lodash";
import "./Day.css";

export default class AllDayEvents extends Component {
    getEventColor = (event, events) => {
        const colors = [
            'primary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
        ];

        const index = _.indexOf(_.values(events), event);

        return colors[index % 5];
    };

    render() {
        const allDayEvents = events.allDayEvents(this.props.day, this.props.events);

        return (
          <div>
              { allDayEvents.length > 0 &&
                  <ul className="list-inline events all-day-events ">
                      { _.map(
                          allDayEvents,
                          (event) => {
                              return (
                                  <li
                                      className={`badge duration-${getDaysDiffInWeek(this.props.day, event.end)} badge-${this.getEventColor(event, this.props.events)}`}
                                      key={event.id}
                                  >
                                      <span>{ event.event }</span>
                                  </li>
                              )
                          })
                      }
                  </ul>
              }
          </div>
        );
    }
}
