import React, { useState } from "react";

const AppointmentForm = ({ addAppointment }) => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addAppointment({ name, date, phone });
        setName("");
        setDate("");
        setPhone("");
    };

    return (
        <div class="container">
            <form onSubmit={handleSubmit}>
                <div class="row">
                    <div class="col-25">
                        <label for="fname">Full Name</label>
                    </div>
                    <div class="col-75">
                        <input
                            type="text"
                            id="fname"
                            name="firstname"
                            placeholder="Your name.."
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="fname">Appointment Date : </label>
                    </div>
                    <div class="col-75">
                        <input
                            id="fname"
                            name="firstname"
                            placeholder="Your name.."
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                </div>

                <div class="row">
                    <div class="col-25">
                        <label for="phone">Phone Number : </label>
                    </div>
                    <div class="col-75">
                        <input
                            id="phone"
                            name="phone"
                            placeholder="Enter Phone Number"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            pattern="[0-9]*"
                        />
                    </div>
                </div>

                <div class="row">
                    <input type="submit" value="Add Appointment" />
                </div>
            </form>
        </div>
    );
};

export default AppointmentForm;