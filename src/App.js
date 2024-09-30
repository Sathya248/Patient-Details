import React, { useState } from "react";
import "./App.css";
import AppointmentForm from "./Component/AppointmentForm";
import AppointmentList from "./Component/AppointmentList";

const App = () => {
    const [appointments, setAppointments] = useState([]);

    const addAppointment = (appointment) => {
        setAppointments([...appointments, appointment]);
    };

    const deleteAppointment = (index) => {
        const deletedAppointments = [...appointments];
        deletedAppointments.splice(index, 1);
        setAppointments(deletedAppointments);
    };

    const editAppointment = (index, editedName, editedDate, editedPhone) => {
        const updatedAppointments = [...appointments];
        updatedAppointments[index] = {
            name: editedName,
            date: editedDate,
            phone: editedPhone,
        };
        setAppointments(updatedAppointments);
    };

    const clearAppointments = () => {
        setAppointments([]);
    };

    return (
        <div>
            <h1>Appointment Patient Details</h1>
            <AppointmentForm addAppointment={addAppointment} />
            <AppointmentList
                appointments={appointments}
                deleteAppointment={deleteAppointment}
                clearAppointments={clearAppointments}
                editAppointment={editAppointment}
            />
        </div>
    );
};

export default App;