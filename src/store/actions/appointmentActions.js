export const createAppointment = (appointment) =>{
    return (dispatch,getState, {getFirebase,getFirestore}) => {
        //make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection("appointments").add({
            ...appointment,
            doctorFirstName: profile.firstname,
            doctorLastName: profile.lastname,
            authorId: authorId,
            createdAt: new Date()
        }).then(()=>{
            dispatch({type:"CREATE_APPOINTMENT", appointment});
        }).catch((err)=>{
            dispatch({type:"CREATE_APPOINTMENT_ERROR",err});
        })
    }
};