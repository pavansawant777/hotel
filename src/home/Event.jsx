import React from 'react';
// import ReactDOM from 'react-dom';
import '../home.css';
import './script.js'; 

export default function Event(){
    return(
        <>
        {/* <h1>hello</h1> */}
        <div class="container mt-5">
    {/* <h1 class="text-center">Table Booking</h1> */}

    <div class="row mt-4">
      <div class="col-12">
        <h2>Public Tables</h2>
      </div>
      <div class="col-md-4 col-sm-6">
        <div class="card table-card">
          <img src="https://storage.googleapis.com/leye_bucket/wp-content/uploads/dc5e37d1-joeslasvegas_gigi.jpg" class="card-img-top table-img" alt="Public Table 1" />
          <div class="card-body">
            <h5 class="card-title">Public Table 1</h5>
            <button class="btn btn-primary book-btn">Book</button>
            <button class="btn btn-danger remove-btn" disabled>Remove</button>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-6">
        <div class="card table-card">
          <img src="https://static.magicpin.com/storage/blog/images/romantic-restaurants-pune-baan-tao.jpg" class="card-img-top table-img" alt="Public Table 2" /> 
          <div class="card-body">
            <h5 class="card-title">Public Table 2</h5>
            <button class="btn btn-primary book-btn">Book</button>
            <button class="btn btn-danger remove-btn" disabled>Remove</button>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-6">
        <div class="card table-card">
          <img src="https://img.freepik.com/premium-photo/interior-public-dining-area-with-colourul-plastic-chairs-tables_454047-2671.jpg" class="card-img-top table-img" alt="Public Table 3" />
          <div class="card-body">
            <h5 class="card-title">Public Table 3</h5>
            <button class="btn btn-primary book-btn">Book</button>
            <button class="btn btn-danger remove-btn" disabled>Remove</button>
          </div>
        </div>
      </div>
    </div>


    <div class="row mt-4">
      <div class="col-12">
        <h2>Private Tables</h2>
      </div>
      <div class="col-md-4 col-sm-6">
        <div class="card table-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjA2TnTE50X6U_OTsTFiBUc4IITqYrqH43mA&s" class="card-img-top table-img" alt="Private Table 1" />
          <div class="card-body">
            <h5 class="card-title">Private Table 1</h5>
            <button class="btn btn-primary book-btn">Book</button>
            <button class="btn btn-danger remove-btn" disabled>Remove</button>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-6">
        <div class="card table-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy0NyvKJH7muyQNOyexK9vsgoVvZ0Re_FrdA&s" class="card-img-top table-img" alt="Private Table 2" />
          <div class="card-body">
            <h5 class="card-title">Private Table 2</h5>
            <button class="btn btn-primary book-btn">Book</button>
            <button class="btn btn-danger remove-btn" disabled>Remove</button>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-6">
        <div class="card table-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROT84wT1xOA0OedBsuDPvydOosDxfkH3laQQ&s" class="card-img-top table-img" alt="Private Table 3" />
          <div class="card-body">
            <h5 class="card-title">Private Table 3</h5>
            <button class="btn btn-primary book-btn">Book</button>
            <button class="btn btn-danger remove-btn" disabled>Remove</button>
          </div>
        </div>
      </div>
    </div>

 
    <div class="row mt-4">
      <div class="col-12">
        <h2>Family Tables</h2>
      </div>
      <div class="col-md-4 col-sm-6">
        <div class="card table-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa5efb_LXa_ECxutKiOUYCfL4VCMokEfqYTIFGLwuLvA-rMEKvSwTKp5VjV8Bv8vpySq8&usqp=CAU" class="card-img-top table-img" alt="Special Table 1" />
          <div class="card-body">
            <h5 class="card-title">Special Table 1</h5>
            <button class="btn btn-primary book-btn">Book</button>
            <button class="btn btn-danger remove-btn" disabled>Remove</button>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-6">
        <div class="card table-card">
          <img src="https://private.thechowkit.com/wp-content/uploads/2021/08/The-Chow-Kit-Private.jpg" class="card-img-top table-img" alt="Special Table 2" />
          <div class="card-body">
            <h5 class="card-title">Special Table 2</h5>
            <button class="btn btn-primary book-btn">Book</button>
            <button class="btn btn-danger remove-btn" disabled>Remove</button>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-6">
        <div class="card table-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb2yoorSB3mnsTDJ1iFWgZiZX9KNW6EpsJtA&s" class="card-img-top table-img" alt="Special Table 3" />
          <div class="card-body">
            <h5 class="card-title">Special Table 3</h5>
            <button class="btn btn-primary book-btn">Book</button>
            <button class="btn btn-danger remove-btn" disabled>Remove</button>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center mt-1 mb-5">
      <button id="check-booked-tables" class="btn btn-info">Check Booked Tables</button>
    </div>
  </div>
<hr></hr>

        </>
    )
}