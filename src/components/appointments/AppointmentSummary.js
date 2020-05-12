import React from "react";

const AppointmentSummary = ({ appointment }) => {
  return (
    <div className="card z-depth-0 appointment-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-patient">{appointment.patient}</span>
        <p>
          posted by {appointment.doctorFirstName} {appointment.doctorLastName}{" "}
        </p>
        <p className="grey-text">{appointment.createdAt.toDate().toDateString()}</p>
      </div>
    </div>
  );
};
export default AppointmentSummary;
