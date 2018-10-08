import React, {Component} from "react";
import Modal from "react-modal";
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import "./AddEvent.css";

const customStyles = {
    content : {
        top: '10%',
        border: 0,
        padding: 0,
        backgroundColor: 'transparent'
    }
};

const addEvent = () => null;

class AddEvent extends Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            start: moment(),
            end: moment().startOf('hour').add(1, 'hour').add(10, 'minute'),
            allDay: false,
            event: '',
        };
    }

    openModal = () => {
        this.setState({modalIsOpen: true});
    };

    closeModal = () => {
        this.setState({modalIsOpen: false});
    };

    handleChange = (event, field) => {
        this.setState({[field]: event.target.value});
    };

    handleTimeChange = (value, field) => {
        this.setState({[field]: value});
    };

    addEvent = (event) => {
        event.preventDefault();
        event.stopPropagation();

        this.props.addEvent(this.state, this.closeModal);
    };

    componentWillMount = () => {
        Modal.setAppElement('body');
    };

    componentDidMount = () => {
        this.props.onRef(this)
    };

    componentWillUnmount = () => {
        this.props.onRef(null)
    };

    render() {
        return (
            <div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    contentLabel="Add event"
                    style={customStyles}
                >
                    <form onSubmit={(event) => this.addEvent(event)}>
                    <div className="modal-content AddEvent">
                        <div className="modal-header">
                            <h5 className="modal-title">Add event</h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                                onClick={this.closeModal}
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="startDate">Start date</label>
                                    <div className="input-group date" id="startDate" data-target-input="nearest">
                                        <DatePicker
                                            selected={this.state.start}
                                            minDate={moment()}
                                            maxDate={this.state.end}
                                            onChange={(startDate) => this.handleTimeChange(startDate, 'start') }
                                            showTimeSelect
                                            dateFormat="YYYY-MM-DD HH:mm"
                                            timeFormat="HH:mm"
                                            className="form-control"
                                            timeIntervals={15}
                                        />
                                    </div>
                                </div>

                                <div className="form-group col-md-6">
                                    <label htmlFor="endDate">End date</label>
                                    <div className="input-group date" id="endDate" data-target-input="nearest">
                                        <DatePicker
                                            selected={this.state.end}
                                            minDate={this.state.start}
                                            onChange={(endDate) => this.handleTimeChange(endDate, 'end') }
                                            showTimeSelect
                                            dateFormat="YYYY-MM-DD HH:mm"
                                            timeFormat="HH:mm"
                                            className="form-control"
                                            timeIntervals={15}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-9">
                                    <label htmlFor="eventName">Event name</label>
                                    <input
                                        value={this.state.event}
                                        type="text"
                                        className="form-control"
                                        id="eventName"
                                        placeholder="Event name"
                                        onChange={(eventName) => this.handleChange(eventName, 'event') }
                                    />
                                </div>
                                <div className="form-group col-md-3 text-center all-day">
                                    <div className="form-check mb-2">
                                        <div className="custom-control custom-checkbox my-1 mr-sm-2">
                                            <input
                                                value={this.state.allDay}
                                                type="checkbox"
                                                className="custom-control-input"
                                                id="allDay"
                                                onChange={(allDay) => this.handleChange(allDay, 'allDay') }
                                            />
                                            <label className="custom-control-label" htmlFor="allDay">All day</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                                onClick={this.closeModal}
                            >
                                Close
                            </button>
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Add event
                            </button>
                        </div>
                    </div>
                    </form>
                </Modal>
            </div>
        );
    }
}

export default connect(null, { addEvent })(AddEvent);