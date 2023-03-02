import React, {useState, useEffect} from 'react'
import httpClient from '../httpClient';
import { 
  MDBBtn,
  MDBContainer 
} from 'mdb-react-ui-kit';

const LandingPage = () => {
  const [user, setUser] = useState('');

  const logoutUser = async() => {
    await httpClient.post("//localhost:5000/logout");
    window.location.href = "/";
  };

  useEffect(() => {
    (async () => {
      try {
        const resp = await httpClient.get("//localhost:5000/@me");
        setUser(resp.data);
      } catch (error) {
        console.log("Not authenticated");
      }
    })();
  }, []);

  return (
    <div className='center'>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <div className="text-center">
            <h1 className='mb-3'>
              Happy Coders
            </h1>
        </div>
        <div className="text-center">
          {user ? (
            <div>
              <h2>Logged in</h2>
              <h3>ID: {user.id}</h3>
              <h3>Email: {user.email}</h3>

              <button onClick={logoutUser}>Logout</button>
            </div>
          ) : (
            <div>
              <p>You are not logged in</p>
              <div>
                <a href="/login">
                  <MDBBtn className='me-1' type="button">
                    Login
                  </MDBBtn>
                </a>
                <a href="/register">
                  <MDBBtn className='me-1' type="button" color='secondary'>
                    Register
                  </MDBBtn>
                </a>
              </div>
            </div>
          )}
        </div>
      </MDBContainer>
    </div>
  );
};

export default LandingPage