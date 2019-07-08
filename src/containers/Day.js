import React, { Component } from 'react';
import dateFns from "date-fns";
import { connect } from 'react-redux';
import ReminderList from '../components/ReminderList';
import AddEditForm from '../components/AddEditForm';
import { postEvents } from '../actions/asyncActions';

class Day extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    handleClick = (day) => {
        this.props.onDateClick(day)
        console.log(dateFns.format(day, "DDMMYYYY"));
        this.setState({
            showModal: true
        })
    }

    getDateAndReminder = () => {
        let { dates, reminders, day } = this.props;
        let date = dateFns.format(day, "DDMMYYYY");
        return dates[date].remindersId;
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        let formData = {}
        const data = new FormData(e.target);
        for (var pair of data.entries()) {
            formData[pair[0]] = pair[1]
        }

        this.props.postEvents(formData).then(() => {
            this.props.updateDates
        });
    }

    render() {
        let { selectedDate, monthStart, formattedDate, day, reminders } = this.props;
        return (
            <React.Fragment>
                <div className={`col cell ${
                    !dateFns.isSameMonth(day, monthStart)
                        ? "disabled"
                        : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
                    }`}
                    key={day}
                    onClick={() => this.handleClick(dateFns.parse(day))}
                >
                    <span className="number">{formattedDate}</span>
                    <span className="bg">{formattedDate}</span>

                    {reminders.length > 0 && <ReminderList list={reminders} />}

                </div>
                {this.state.showModal && <AddEditForm onClose={this.handleClose} onFormSubmit={this.handleFormSubmit} />}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        reminders: state.events.reminders,
        dates: state.events.dates,
    }
}

export default connect(mapStateToProps, { postEvents })(Day);
