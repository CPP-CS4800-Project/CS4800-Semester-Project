import React, {useState, useEffect} from 'react'
import httpClient from '../httpClient';
import { 
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarBrand,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBBtn,
  MDBCollapse
} from 'mdb-react-ui-kit';

const LandingPage = () => {
  const [user, setUser] = useState('');
  const [showNav, setShowNav] = useState(false);

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
    <div>
        {user ? (

        <header>
            <MDBNavbar className="fixed-top" expand='lg' light bgColor='light' fixed>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='/'>Happy Coders</MDBNavbarBrand>
                    <MDBNavbarToggler type='button' aria-expanded='false' aria-label='Toggle navigation' onClick={()=> setShowNav(!showNav)}
                        >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar show={showNav}>
                        <MDBNavbarNav right className='mb-2 mb-lg-0'>
                            <MDBNavbarItem active>
                                <MDBNavbarLink active aria-current='page' href='/'>
                                    Home
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem active>
                                <MDBNavbarLink active aria-current='page' href='/#'>
                                    Features
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem active>
                                <MDBNavbarLink active aria-current='page' onClick={logoutUser}>
                                    Logout
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                                    Coming Soon
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
            <div className="barnav">
                <div className='p-5 text-center bg-light'>
                    <h1 className='mb-3'>Logged in</h1>
                    <h4 className='mb-3'>ID: {user.id}</h4>
                    <h4 className='mb-3'>Email: {user.email}</h4>
                    <MDBBtn tag="a" outline size="lg" onClick={logoutUser}>
                        Log Out
                    </MDBBtn>
                </div>

                <p className='mt-4'>Scroll down</p>
                <p>Scroll down</p>
                <p>Scroll down</p>
                <p>Scroll down</p>
                <p>Scroll down</p>
                <p>Scroll down</p>
                <p>Scroll down</p>
                <p>Scroll down</p>
                <p>Scroll down</p>
                <p>Scroll down</p>
                <p>Scroll down</p>
                <p>Scroll down</p>
                <p>Scroll down</p>
                <p>Scroll down</p>
                <p>Scroll down</p>
                <p>Scroll down</p>
                <p>Scroll down</p>
                <p>Scroll down</p>
                <p>Scroll down</p>
                <p>Scroll down</p>
                <p>Scroll down</p>
                <p>Scroll down</p>
                <p>Scroll down</p>
                <p>Scroll down</p>
                <p>Scroll down</p>
                <p>Scroll down</p>
                <p>Scroll down</p>
                <p>Scroll down</p>
                <p>Scroll down</p>
            </div>
        </header>

        ) : (
        <div className='center'>
            <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                <div className="text-center">
                    <h1 className='mb-3'>
                        Happy Coders
                    </h1>
                </div>
                <div className="text-center">
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
                </div>
            </MDBContainer>
        </div>
        )}
    </div>
  );
};

export default LandingPage