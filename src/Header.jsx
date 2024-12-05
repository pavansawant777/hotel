import React from "react";
import './header.css';
import { NavLink, useNavigate } from "react-router-dom";

export default function Header({ isAuthenticated, setAuth }) {
    const navigate = useNavigate();

    const LogOut = () => {
        localStorage.clear();
        setAuth(false);
        navigate('/');
    };

    return (
        <>
            <header className="">
                <div className="container-fluid sticky-top navbarr">
                    <div className="row">
                        <div className="col-md-9 nav_main">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <a className="navbar-brand text-danger ml-4" href="#"><b style={{ color: "red", fontFamily: "sans-serif" }}>RESTAURANT</b></a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto  w-100 ml-5 d-flex justify-content-end">
                                        {!localStorage.getItem("token")?
                                        <>
                                                <li className="nav-item active menu_top">
                                                    <NavLink className="nav-link nav_ani text-white" to="/">HOME</NavLink>
                                                </li>
                                                <li className="nav-item ml-3">
                                                    <NavLink className="nav-link nav_ani text-white" to="/about">ABOUT</NavLink>
                                                </li>
                                                <li className="nav-item ml-3">
                                                    <NavLink className="nav-link nav_ani text-white" to="/contact">CONTACT US</NavLink>
                                                </li>
                                        </>
                                    :<>
                                    <span></span>
                                    </>}
                                        {isAuthenticated ? (
                                            <>
                                                <li className="nav-item ml-3">
                                                    <NavLink to="#" className="nav-link nav_ani text-white" onClick={LogOut}>LogOut</NavLink>
                                                </li>
                                                <li className="nav-item ml-3">
                                                    <NavLink to="/profile" className="nav-link nav_ani text-white">Profile</NavLink>
                                                </li>
                                            </>
                                        ) : (
                                            <>
                                                <li className="nav-item ml-3">
                                                    <NavLink className="nav-link nav_ani text-white" to="/login">LOGIN</NavLink>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
