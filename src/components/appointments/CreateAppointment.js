import React, { Component } from "react";
import { connect } from "react-redux";
import { createAppointment } from "../../store/actions/appointmentActions";
import { Redirect } from "react-router-dom";
import DatePicker from "react-date-picker";

class CreateAppointment extends Component {
  state = {
    patient: "",
    content: "",
    date: new Date(),
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  onChange = date => this.setState({ date })

  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);
    this.props.createAppointment(this.state);
    this.props.history.push("/");
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/sigin" />;

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create new appointment</h5>
          <div className="input-field">
            <label htmlFor="patient">Patient Name</label>
            <input type="text" id="patient" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Disease</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <DatePicker onChange={this.onChange} value={this.state.date} />
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createAppointment: (appointment) =>
      dispatch(createAppointment(appointment)),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(CreateAppointment);
