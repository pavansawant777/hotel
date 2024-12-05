import React, { useState } from "react";
import './home.css';

function Contact() {

    const [isPopupVisible, setPopupVisibility] = useState(false);

    const handleClick = () => {
      setPopupVisibility(true);
      setTimeout(() => {
        setPopupVisibility(false);
      }, 5000); // Popup will disappear after 2 seconds
    };

    return(
        
    <section className="contact">
        <div className="container">
            <div className="row py-3 g-3">
                <div className="col-md-6 first_col">
                    <h1 className="text-center mt-3">Contact Us</h1>
                    <form className="p-4 mt-5">
                    <div className="mb-3">
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Name"></input>
                    </div>
                    <div className="mb-3">
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Email"></input>
                    </div>
                    <div className="mb-3">
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Subject"></input>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Enter any message</label>
                        <textarea type="text" className="form-control" rows="3" placeholder="Message"></textarea>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-primary">Send Now</button>
                    </div>

                    </form>
                </div>
                <div className="col-md-6">
                    <img src="https://gommts3.mmtcdn.com/htl-imgs/htl-imgs/202310201439303273-d77d857e_z.jpg" className="img_fluid w-100"></img>
                </div>
            </div>
            <div className="last_row">
                <div className="row row-cols-1 row-cols-md-3 p-3 text-white">
                    <div className="col">
                        <h4>CALL US</h4>
                        <p>+ 1235 2355 98</p>
                    </div>
                    <div className="col">
                        <h4>LOCATION</h4>
                        <p> 198 West 21th Street, Suite 721 New York NY 10016</p>
                    </div>
                    <div className="col">
                        <h4>EMAIL</h4>
                        <p>info@yoursite.com</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="container bg-light">        
            <div className="row1 media_row1_css">
            <div className="star-widget">
                <input type="radio" name="rate" id="rate-5"></input>
                <label for="rate-5" className="fa-solid fa-star"></label>
                <input type="radio" name="rate" id="rate-4"></input>
                <label for="rate-4" className="fa-solid fa-star"></label>
                <input type="radio" name="rate" id="rate-3"></input>
                <label for="rate-3" className="fa-solid fa-star"></label>
                <input type="radio" name="rate" id="rate-2"></input>
                <label for="rate-2" className="fa-solid fa-star"></label>
                <input type="radio" name="rate" id="rate-1"></input>
                <label for="rate-1" className="fa-solid fa-star"></label>
                <form action="#">
                    <header ClassName="text-white"></header>
                    <div className="text-area">
                        <textarea cols="30" placeholder="Describe your experience..."></textarea>
                    </div>
                    
                    {isPopupVisible && (
                            <div className="popup">
                            <p>Thanks for rating us 😃!</p>
                            </div>
                        )}

                    <div className="App">
                        <button type="submit" onClick={handleClick}>Rate Us</button>
                    </div>
                </form>
            </div>
        
            </div>
        </div>
        <div className="row2">
            <div className="testimonial-heading pt-4 mt-3">
                <span>Comments</span>
                <h1>Client Says</h1>
            </div>
            <div className="testimonial-box-container">
                <div className="testimonial-box">
                    <div className="box-top">
                        <div className="profile">
                            <div className="profile-img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT800Mo_wo3jVvDQzruZxDx8HnszwqkUe2MAg&s"></img>
                            </div>
                            <div className="name-user">
                                <strong>Touseeq Ijaz</strong>
                                <span>@touseeqijazweb</span>
                            </div>
                        </div>
                        <div className="review">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                    </div>
                    <div className="client-comment">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus atque, excepturi quos saepe sit quis! Molestiae dolorum recusandae officiis eum! Odit libero provident, officia placeat laborum exercitationem animi labore magni?</p>
                    </div>
                </div>

                <div className="testimonial-box">
                    <div className="box-top">
                        <div className="profile">
                            <div className="profile-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT800Mo_wo3jVvDQzruZxDx8HnszwqkUe2MAg&s"></img>
                            </div>
                            <div className="name-user">
                                <strong>J.K Rowling</strong>
                                <span>@jkrowling</span>
                            </div>
                        </div>
                        <div className="review">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                    </div>
                    <div className="client-comment">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus atque, excepturi quos saepe sit quis! Molestiae dolorum recusandae officiis eum! Odit libero provident, officia placeat laborum exercitationem animi labore magni?</p>
                    </div>

                </div>
                
                <div className="testimonial-box">
                    <div className="box-top">
                        <div className="profile">
                            <div className="profile-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT800Mo_wo3jVvDQzruZxDx8HnszwqkUe2MAg&s"></img>
                            </div>
                            <div className="name-user">
                                <strong>Harry Potter</strong>
                                <span>@harrypotterweb</span>
                            </div>
                        </div>
                        <div className="review">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>
                    <div className="client-comment">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus atque, excepturi quos saepe sit quis! Molestiae dolorum recusandae officiis eum! Odit libero provident, officia placeat laborum exercitationem animi labore magni?</p>
                    </div>

                </div>

                <div className="testimonial-box">
                    <div className="box-top">
                        <div className="profile">
                            <div className="profile-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT800Mo_wo3jVvDQzruZxDx8HnszwqkUe2MAg&s"></img>
                            </div>
                            <div className="name-user">
                                <strong>Oliva</strong>
                                <span>@olivahenryweb</span>
                            </div>
                        </div>
                        <div className="review">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                    </div>
                    <div className="client-comment">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus atque, excepturi quos saepe sit quis! Molestiae dolorum recusandae officiis eum! Odit libero provident, officia placeat laborum exercitationem animi labore magni?</p>
                    </div>

                </div>

            </div>
        </div>

        <div className="container-fluid">
            <div className="row3">
            <iframe class="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameborder="0" style={{minHeight: '350px',width:'60%', border:'0', allowfullscreen:"", ariaHidden:'false',tabIndex:'0'}}></iframe>
            </div>
        </div>
    </section>
        
    );
}
export default Contact;










