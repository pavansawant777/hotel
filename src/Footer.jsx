import React from 'react';
import { Link } from "react-router-dom";
import  './footer.css';


export default function Footer()
{
  return(
  <>

 
    <footer className="ftco-footer ftco-no-pb ftco-section text-white">
		<div className="container">
			<div className="row mb-5">
				<div className="col-md-6 p-3 col-lg-3 ft-1">
					<div className="ftco-footer-widget mb-4">
						<h5 className="ftco-heading-2 mt-3"><b>TASTE.IT</b></h5>
						<p className="mt-4 ">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
						<ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3  d-flex" >
							<li className="ftco-animate ml-2" ><a href="#"><span className="fa fa-twitter bg-danger text-white p-3"></span></a></li>
							<li className="ftco-animate  ml-4"><a href="#"><span className="fa fa-facebook bg-danger text-white p-3"></span></a></li>
							<li className="ftco-animate  ml-4"><a href="#"><span className="fa fa-instagram bg-danger text-white p-3"></span></a></li>
						</ul>
					</div>
				</div>
				<div className="col-md-6 p-3 col-lg-3 ft-2">
					<div className="ftco-footer-widget mb-4">
						<h5 className="ftco-heading-2 mt-3"><b>NAV LINK</b></h5>
						<ul className="navbar-nav mt-3"  >
							<li className="nav-item menu-items">
								<a className="nav-link" href="Home"><h6>Home</h6></a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="About"><h6>About</h6></a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="Event"><h6>Event</h6></a>
							</li>   
							<li className="nav-item">
								<a className="nav-link" href="Gallery"><h6>Gallery</h6></a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="Blog"><h6>Blog</h6></a>
							</li> 
							<li className="nav-item">
								<a className="nav-link" href="Contact"><h6>Contact</h6></a>
							</li> 
						</ul>
					</div>
				</div>
				<div className="col-md-6 p-3 col-lg-3 ft-3">
					<div className="ftco-footer-widget mb-4">
						<h5 className="ftco-heading-2 mt-3"><b>OPEN HOURS</b></h5>
						<ul className="list-unstyled open-hours" >
							<li className="d-flex  mt-4"><div className='col-md-6'><span><b>Monday</b></span></div><div className='col-md-6 d-flex text-muted'><span>9:00 - 24:00</span></div></li>
							<li className="d-flex  mt-2"><div className='col-md-6'><span><b>Tuesday</b></span></div><div className='col-md-6 d-flex text-muted'><span>9:00 - 24:00</span></div></li>
							<li className="d-flex  mt-2"><div className='col-md-6'><span><b>Wednesday</b></span></div><div className='col-md-6 d-flex text-muted'><span>9:00 - 24:00</span></div></li>
							<li className="d-flex  mt-2"><div className='col-md-6'><span><b>Thursday</b></span></div><div className='col-md-6 d-flex text-muted'><span>9:00 - 24:00</span></div></li>
							<li className="d-flex  mt-2"><div className='col-md-6'><span><b>Friday</b></span></div><div className='col-md-6 d-flex text-muted'><span>9:00 - 02:00</span></div></li>
							<li className="d-flex  mt-2"><div className='col-md-6'><span><b>Saturday</b></span></div><div className='col-md-6 d-flex text-muted'><span>9:00 - 02:00</span></div></li>
							<li className="d-flex  mt-2"><div className='col-md-6'><span><b>Sunday</b></span></div><div className='col-md-6 d-flex text-muted'><span> Closed</span></div></li>
						</ul>
					</div>
				</div>
				
				<div className="col-md-6 p-3 col-lg-3 ft-4">
					<div className="ftco-footer-widget mb-4">
						<h5 className="ftco-heading-2 mt-3"><b>NEWSLETTER</b></h5>
						<p className='mt-4'>Far far away, behind the word mountains, far from the countries.</p>
						<form action="#" className="subscribe-form">
							<div className="form-group mt-4">
								<input type="text" className="form-control mb-2 text-center bg-white border-secondary p-3" placeholder="Enter email address"/>
								<input type="submit" value="Subscribe" className="form-control submit px-3 bg-danger border-danger text-white text-center "/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<div className="container-fluid px-0 bg-danger py-3 ">
			<div className="row no-gutters">
				<div className="col-md-12 text-center">

					<p className="mb-0 copyright">
						</p>
					</div>
				</div>
			</div>
		</footer>
  
  </>
  )
}
