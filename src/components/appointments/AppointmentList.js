import React from "react";
import AppointmentSummary from "./AppointmentSummary";
import { Link } from "react-router-dom";

const AppointmentList = ({ appointments }) => {
  return (
    <div className="appointment-list section">
      {appointments &&
        appointments.map((appointment) => {
          return (
            <Link to = {"/appointment/"+appointment.id} key={appointment.id} >
              <AppointmentSummary appointment={appointment}/>
            </Link>
          );
        })}
    </div>
  );
};

export default AppointmentList;
