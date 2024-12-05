import React, { useState } from "react";
import '../home.css'
import axios from 'axios'
import { NavLink, useNavigate } from "react-router-dom";
export default function Book({setReq}) {
    const navigate = useNavigate();
    const [requirement, setRequirement] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Sarthak")
        try {
            localStorage.setItem(`Requirement`, requirement);
            const response = await axios.get(`http://localhost:5000/getAvailableTables/${requirement}`);
            console.log(response.data);
            setReq(response.data); // Set the response data to Req state
            navigate('/');
        } catch (error) {
            console.error("Error fetching available tables:", error);
        }
    };
    return (
        <>
            <div className="container-fluid justify-content-center text-center ">
                <div className="row">
                    <div className="col-md-12   p-0">
                        <div className="p-5" style={{
                            height: '60vh', width: '100%', backgroundImage: "url('https://image.slidesdocs.com/responsive-images/background/hotel-reception-lobby-a-3d-rendering-of-the-interior-design-powerpoint-background_4fd093e979__960_540.jpg')",
                            backgroundSize: '100% 100%'
                        }}>
                            <div className="row">
                                <div className="col-md-7  mt-5 bookingtable1">
                                    <section className="my-3 mt-5 container21">
                                        <header>
                                            <h3 style={{ fontFamily: 'initial', fontWeight: "800" }}>Book Your Table</h3></header>
                                        <form className="form" onSubmit={handleSubmit}>

                                            <div className="input-box address mb-2">
                                                <label>Number of Guest :</label>
                                                <input required onChange={(e)=>setRequirement(e.target.value)} value={requirement} placeholder="Number of Guest" type="Number" />

                                            </div>
                                            <button type="submit">Add Table</button>
                                        </form>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}