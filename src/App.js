import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import AppointmentDetails from "./components/appointments/AppointmentDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateAppointment from "./components/appointments/CreateAppointment";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route  exact path="/" component={Dashboard}/>
          <Route path="/appointment/:id" component={AppointmentDetails}/>
          <Route path="/sigin" component={SignIn}/>
          <Route path="/sigup" component={SignUp}/>
          <Route path="/create" component={CreateAppointment}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
