import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';

function Login({ setAuth }) {
    const navigate = useNavigate();

    const verifyLogin = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                await axios.get("http://localhost:5000/verifyToken", {
                    headers: { Authorization: token }
                });
                setAuth(true);
                navigate('/');
            } catch (e) {
                console.error('Token verification failed:', e);
                localStorage.removeItem("token");
                setAuth(false);
            }
        }
    };

    useEffect(() => {
        verifyLogin();
    }, []);

    const [values, setValues] = useState({
        username: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', values);
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                setAuth(true);
                navigate('/');
            } else if (response.data.Error) {
                alert('Invalid Credentials');
            }
        } catch (e) {
            console.error('Error logging in:', e);
            alert('Error logging in');
        }
    };

    return (
        <div className="container my-5">
            <div className="row d-flex my-5" style={{ justifyContent: 'center' }}>
                <div className="col-md-12 text-center">
                    <h3>Login Now</h3>
                </div>
                <div className="col-md-6">
                    <form className="py-5" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="username"
                                onChange={e => setValues({ ...values, username: e.target.value })}
                                className="form-control"
                                value={values.username}
                                placeholder="Enter email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                value={values.password}
                                onChange={e => setValues({ ...values, password: e.target.value })}
                                name="password"
                                className="form-control"
                                placeholder="Password"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary mr-5">Submit</button>
                        <small>New User?</small>
                        <NavLink to='/register'> Register Here</NavLink>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
