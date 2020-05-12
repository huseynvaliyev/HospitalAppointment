const initState = {
    appointments: [

    ],
  };
  
  const appointmentReducer = (state = initState, action) => {
    switch (action.type) {
      case "CREATE_APPOINTMENT":
        console.log("created appointment" ,action.appointment);
        return state;
      case "CREATE_APPOINTMENT_ERROR":
        console.log("create appointment error" ,action.err);
        return state;
      default:
        return state;
    }
  };
  
  export default appointmentReducer;
  