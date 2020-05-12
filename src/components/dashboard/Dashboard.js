import React, { Component } from "react";
import AppointmentList from "../appointments/AppointmentList";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import {Redirect} from "react-router-dom";

class Dashboard extends Component {
  render() {
    //console.log(this.props)
    const {appointments,auth} = this.props;
    if(!auth.uid) return <Redirect to="/sigin"/>

    return (
      <div className="dashboard container">
        <div className="row">
            <div className="col s12 m6">
                <AppointmentList appointments = {appointments}/>
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  console.log(state);
  return{
    appointments: state.firestore.ordered.appointments,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: "appointments"}
  ])
)(Dashboard);
