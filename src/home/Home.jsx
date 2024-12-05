import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import Menu from "./Menu";
import Section from "./Section";
import Serving from './Serving';
import Booking from "./Book";
import Event from "./Event";
import Tables from './Tables';
import Contact from "./Contact";
import '../home.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Home({ isAuthenticated, setAuth }) {
    const [placed, setPlaced] = useState(0);
    const [bookingStatus, setBookingStatus] = useState(null);
    const [req, setReq] = useState(null);
    const navigate = useNavigate();

    // const getCurrent = async () => {
    //     if (!localStorage.getItem('token')) {
    //         navigate('/login');
    //     } else {
    //         try {
    //             const res = await axios.get(`http://localhost:5000/getCurrent/${localStorage.getItem('token')}`);
    //             setPlaced(res.data.u_id);
    //             console.log(res.data)
    //         } catch (error) {
    //             console.error("Error fetching current user data:", error);
    //         }
    //     }
    // };

    // useEffect(() => {
    //     getCurrent();
    // }, []);

    const reSelect = () => {
        console.log("ReSelect called");
        localStorage.removeItem(`Requirement`);
        setReq(null); // Reset Req to null to show the Booking component again
        navigate('/');
    };

    return (
        <>
            {isAuthenticated ? (
                <>
                    {bookingStatus === "serving" || localStorage.getItem(`isBooked${placed}`) ? (
                        <>
                            <h1>{placed}</h1>
                            <Serving placed={placed} />
                            <Menu setPlaced={setPlaced} />
                        </>
                    ) : (
                        req || localStorage.getItem(`Requirement`) ? (
                            <div>
                                <h1 className="cursor-pointer" onClick={reSelect}>ReSelect Size</h1>
                                    <Tables placed={placed} setPlaced={setPlaced} Tables={req} setBookingStatus={setBookingStatus} />
                            </div>
                        ) : (
                            <Booking setReq={setReq} placed={placed} />
                        )
                    )}
                </>
            ) : (
                <>
                    <Slider />
                    {/* <Section /> */}
                    <Event />
                    <Contact />
                </>
            )}
        </>
    );
}
