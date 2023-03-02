import React, {useState} from 'react'
import httpClient from "../httpClient";
import { useNavigate} from "react-router-dom";
import {
  MDBContainer,
  MDBInput,
  MDBBtn,
//   MDBIcon
}
from 'mdb-react-ui-kit';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    const logInUser = async () => {
        console.log(email, password);
    
        try {
          const resp = await httpClient.post("//localhost:5000/login", {
            email,
            password,
          });
          console.log(resp)
          window.location.href = "/";
        } catch (e) {
          if (e.response.status === 401) {
            alert("Invalid credentials");
          }
        }
      };

  return (
    // <div>
    //   <h1>Log Into Your Account</h1>
    //   <form>
    //     <div>
    //       <label>Email: </label>
    //       <input
    //         type="text"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         id=""
    //       />
    //     </div>
    //     <div>
    //       <label>Password: </label>
    //       <input
    //         type="password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //         id=""
    //       />
    //     </div>
    //     <button type="button" onClick={() => logInUser()}>
    //       Submit
    //     </button>
    //   </form>
    // </div>
    
    <div className='center'>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <div className="text-center">
          <h1 className='mb-3'>
            Log In
          </h1>
        </div>
        <div>
          <MDBInput 
            wrapperClass='mb-4' 
            label='Email address' 
            id='loginEmail' 
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <MDBInput 
            label='Password' 
            id='loginPassword' 
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>Not a member? <a href="/register">Register</a></p>
        </div>

        <div className="text-center">
          <MDBBtn className='me-1' type="button" onClick={() => logInUser()}>
            Sign in
          </MDBBtn>
          <MDBBtn className='me-1' type="button" color='link' rippleColor='dark' onClick={() => navigate(-1)}>
            Back
          </MDBBtn>
        </div>

      </MDBContainer>
    </div>
  );
};


export default LoginPage