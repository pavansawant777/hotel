import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Register.jsx';
import Login from './Login.jsx';
import Header from './Header.jsx';
import About from './About.jsx';
import Contact from './home/Contact.jsx';
import Home from './home/Home.jsx';
import Profile from './home/Profile.jsx'
import Footer from './Footer.jsx';
import PrintPreview from './PrintPreview.jsx';

function App() {
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        const verifyToken = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const response = await axios.get('http://localhost:5000/verifyToken', {
                        headers: { Authorization: token },
                    });
                    setAuth(response.data.authenticated);
                } catch (error) {
                    console.error('Token verification failed:', error);
                    setAuth(false);
                }
            }
        };

        verifyToken();
    }, []);

    return (
        <BrowserRouter>
            <Header isAuthenticated={auth} setAuth={setAuth} />
            <Routes>
                <Route path='/' element={<Home isAuthenticated={auth} setAuth={setAuth} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login setAuth={setAuth} />} />
                <Route path="/profile" element={<Profile setAuth={setAuth} Auth={auth} />} />
                <Route path="/about" element={<About setAuth={setAuth} Auth={auth} />} />
                <Route path="/contact" element={<Contact setAuth={setAuth} Auth={auth} />} />
                <Route path="/print" element={<PrintPreview Auth={auth} />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
