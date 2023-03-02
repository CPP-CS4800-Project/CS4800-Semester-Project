import React, {useState} from 'react'
import httpClient from "../httpClient";
import { useNavigate} from "react-router-dom";
import {
  MDBContainer,
  MDBInput,
  MDBBtn
}
from 'mdb-react-ui-kit';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();
  
    const registerUser = async () => {
      try {
        const resp = await httpClient.post("//localhost:5000/register", {
          email,
          password,
        });
        console.log(resp)
        window.location.href = "/";
      } catch (error) {
        if (error.response.status === 401) {
          alert("Invalid credentials");
        }
      }
    };

  return (
  //   <div>
  //   <h1>Create an account</h1>
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
  //     <button type="button" onClick={() => registerUser()}>
  //       Submit
  //     </button>
  //   </form>
  // </div>

  <div className='center'>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <div className="text-center">
          <h1 className='mb-3'>
            Register
          </h1>
        </div>
        
        <MDBInput 
          wrapperClass='mb-4' 
          label='Email address' 
          id='registerEmail' 
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="new-password"
        />
        <MDBInput 
          wrapperClass='mb-4' 
          label='Password' 
          id='registerPassword' 
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
        />

        <div className="text-center">
          <MDBBtn className='me-1' type="button" onClick={() => registerUser()}>
            Register
          </MDBBtn>
          <MDBBtn className='me-1' type="button" color='link' rippleColor='dark' onClick={() => navigate(-1)}>
            Back
          </MDBBtn>
        </div>

      </MDBContainer>
    </div>
  );
};


export default RegisterPage