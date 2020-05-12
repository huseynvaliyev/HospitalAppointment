import authReducer from "./authReducer";
import appointmentReducer from "./appointmentReducer";
import {combineReducers} from "redux";
import {firestoreReducer} from "redux-firestore";
import {firebaseReducer} from "react-redux-firebase";

const rootReducer = combineReducers({
    auth: authReducer,
    appointment: appointmentReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer;