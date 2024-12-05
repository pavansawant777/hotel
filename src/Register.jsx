import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
function Register() {
  const [Values, setValues] = useState({
    username: "",
    email: "",
    password: ""

  })
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post("http://localhost:5000/register", Values)
      .then(e => {
        console.log(e.data)
        if (e.data.Status == "Success") { navigate('/login') }
        else alert('Error')
      }).catch(ee => console.log("Error", ee))
  }

  return (
    <div className="container my-5">
      <div className="row d-flex my-5" style={{ justifyContent: 'center' }}>
        <div className="col-md-12 text-center">
          <h3>Register Here</h3>
        </div>
        <div className="col-md-6">

          <form className='py-5' onSubmit={handleSubmit}>
            <div className="form-group">
              <input autoFocus name='username' onChange={e => setValues({ ...Values, username: e.target.value })} type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter name" />
            </div>
            <div className="form-group">
              <input type="email" name='email' onChange={e => setValues({ ...Values, email: e.target.value })} className="form-control" id="exampleInputPassword1" placeholder="email" />
            </div>
            <div className="form-group">
              <input type="password" name='password' onChange={e => setValues({ ...Values, password: e.target.value })} className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary mr-5">Register</button>
            <small>Alerady User ?</small><NavLink to='/login'>Login Here</NavLink>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Register