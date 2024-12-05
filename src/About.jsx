import React,{ useEffect } from "react";
import "./about.css";
export default function About() {
   
	useEffect(() => {

        updateHeadings(1, 100, "heading-1");
        updateHeadings(1, 400, "heading-2");
		updateHeadings(1, 10, "heading-3");
		updateHeadings(1, 100, "heading-4");
    },[]);
    const updateHeadings = (start, end, elementId) => {
        let i = start;
        const interval = setInterval(() => {
            document.getElementById(elementId).innerText = i;
            i++;
            if (i > end) {
                clearInterval(interval);
            }
        });
    }
    return (
        <>
            <section className="about-section" id="about-section">
                <div className='about-section-header container-fluid p-5'>
                    <h2 className='text-white text-center p-5'>ABOUT</h2>
                    <h4 className='text-white text-center p-2'><a href='#'>Home</a>/About</h4>
                </div>

                <h2 className='text-primary text-center p-3 mt-5'>Services We Provide</h2>

                <div className="container mt-5">
                    <div className="row mb-5">
                        <div className="col-md-6 p-3 col-lg-4 p-4 ab-1 rounded-0">
                            <div className="about-card card">
                                <div className="about-card-header p-3">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsGUL2uILi6QXt8I7I3q2dA8LssR9hy7gZmg&s" height="100%" width="100%" alt="img" />
                                </div>
                                <div className="body about-card-body mt-4">
                                    <h3 className="text-white text-center">Positive environment </h3>
                                </div>
                                <div className="about-card-footer text-white text-center mt-2 p-1">
                                    Soft lighting, comfortable seating with elbow room, an attentive staff, great service, a distinctive, well-thought-out menu, a traditional bar, a good wine menu, and soft background music.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-3 col-lg-4 p-4 ab-1 rounded-0">
                            <div className="about-card card">
                                <div className="about-card-header p-3">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgPHhIGynofxU0LRnbSym0b0yO4oB4BE_14w&s" height="100%" width="100%" alt="img" />
                                </div>
                                <div className="body about-card-body mt-4">
                                    <h3 className="text-white text-center">Free Parking </h3>
                                </div>
                                <div className="about-card-footer text-white text-center mt-2 p-1">
                                    Parking is the act of stopping and disengaging a vehicle and usually leaving it unoccupied.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-3 col-lg-4 p-4 ab-1 rounded-0">
                            <div className="about-card card">
                                <div className="about-card-header p-3">
                                    <img src="https://www.posist.com/restaurant-times/wp-content/uploads/2023/07/5-Restaurant-Staff-Incentive-Ideas-To-Inspire-And-Motivate-Your-Employees.jpg" height="100%" width="100%" alt="img" />
                                </div>
                                <div className="body about-card-body mt-4">
                                    <h3 className="text-white text-center">Personalized Service</h3>
                                </div>
                                <div className="about-card-footer text-white text-center mt-2 p-1">
                                    Restaurant service is a series of components that work together to provide customers with a pleasant and satisfying dining experience.
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 p-3 col-lg-4 p-4 ab-1 rounded-0">
                            <div className="about-card card">
                                <div className="about-card-header p-3">
                                    <img src="https://media.istockphoto.com/id/531476601/photo/free-wifi-sign-in-coffee-shop.jpg?s=612x612&w=0&k=20&c=B3rDkMW6S-2ZH86vu_gqXo4UPEgCW-qBFnIVsycJN-U=" height="100%" width="100%" alt="img" />
                                </div>
                                <div className="body about-card-body mt-4">
                                    <h3 className="text-white text-center">Free Wi-fi</h3>
                                </div>
                                <div className="about-card-footer text-white text-center mt-2 p-1">
                                    One of the most essential things about offering free Wi-Fi to customers is how it affects business and sales. By providing your guests with internet access, you can actually boost sales.
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 p-3 col-lg-4 p-4 ab-1 rounded-0">
                            <div className="about-card card">
                                <div className="about-card-header p-3">
                                    <img src="https://media-cdn.tripadvisor.com/media/photo-s/11/fc/28/d8/family-friendly-our-children.jpg" height="100%" width="100%" alt="img" />
                                </div>
                                <div className="body about-card-body mt-4">
                                    <h3 className="text-white text-center">Garden for Kids</h3>
                                </div>
                                <div className="about-card-footer text-white text-center mt-2 p-1">
                                    A garden is a planned plot of land adjoining a house that is used for cultivating new plants, flowers and fruits in trees and other forms of nature.
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <section className='customer'>
                    <div className="container mt-">

                        <h2 className='text-danger text-center p-5'>Happy customers Count</h2>
                        <div className="row mb-5">
                            <div className="col-md-6 p-3 col-lg-3 about-1">
                                <h1 id="heading-1" className='text-white text-center'>100</h1>
                                <p className='para-1 text-center'>Testy Dishes</p>
                            </div>
                            <div className="col-md-6 p-3 col-lg-3 about-1">
                                <h1 id="heading-2" className='text-white text-center'>4,000</h1>
                                <p className='para-1 text-center'>Dishes Served</p>
                            </div>
                            <div className="col-md-6 p-3 col-lg-3 about-1">
                                <h1 id="heading-3" className='text-white text-center'>10</h1>
                                <p className='para-1 text-center'>Restaurants</p>
                            </div>
                            <div className="col-md-6 p-3 col-lg-3 about-1">
                                <h1 id="heading-4" className='text-white text-center'>10,000</h1>
                                <p className='para-1 text-center'>Happy Customers</p>
                            </div>
                        </div>
                    </div>
                </section>

            </section>
        </>
    );
}




