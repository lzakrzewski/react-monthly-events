import React, {Component} from 'react';
import Week from "./Week";
import './Month.css';

export default class Month extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12 Month">
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th>
                                    Monday
                                </th>
                                <th>
                                    Tuesday
                                </th>
                                <th>
                                    Wednesday
                                </th>
                                <th>
                                    Thursday
                                </th>
                                <th>
                                    Friday
                                </th>
                                <th>
                                    Saturday
                                </th>
                                <th>
                                    Sunday
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <Week
                                events={this.props.events}
                                currentMonth={this.props.currentMonth}
                                week={0}
                            />
                            <Week
                                events={this.props.events}
                                currentMonth={this.props.currentMonth}
                                week={1}
                            />
                            <Week
                                events={this.props.events}
                                currentMonth={this.props.currentMonth}
                                week={2}
                            />
                            <Week
                                events={this.props.events}
                                currentMonth={this.props.currentMonth}
                                week={3}
                            />
                            <Week
                                events={this.props.events}
                                currentMonth={this.props.currentMonth}
                                week={4}
                            />
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
