import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';

const NavigationBar=()=>{

    const [showBasic, setShowBasic] = useState(false);


    return (
        <>
        <MDBNavbar className='p-4 sticky-top shadow-lg shadow-lg' expand='lg' light bgColor='dark'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='/' className='mx-5 text-white mx-2'><h2>AIO</h2></MDBNavbarBrand>

                <MDBNavbarToggler
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
                onClick={() => setShowBasic(!showBasic)}
                >
                <MDBIcon icon='bars' className='text-white' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                <MDBNavbarNav className='ml-auto'>
                    <MDBNavbarItem>
                        <NavLink exact to="/image" className={({ isActive }) => isActive ? 'active' : 'inactive'}>   
                         <h5 className='mt-2 mx-3'>Images</h5>
                        </NavLink>
                    
                    </MDBNavbarItem>
                    {/* <MDBNavbarItem>
                       <NavLink exact to="/barcode" className={({ isActive }) => isActive ? 'active' : 'inactive'}>   
                         <h5 className='mt-2 mx-3'>BarCode</h5>
                        </NavLink>

                    </MDBNavbarItem> */}
                    <MDBNavbarItem>
                       <NavLink exact to="/qrcode" className={({ isActive }) => isActive ? 'active' : 'inactive'}>   
                         <h5 className='mt-2 mx-3'>QrCode</h5>
                        </NavLink>

                    </MDBNavbarItem>
                    <MDBNavbarItem>
                       <NavLink exact to="/urlshort" className={({ isActive }) => isActive ? 'active' : 'inactive'}>   
                         <h5 className='mt-2 mx-3'>UrlShort</h5>
                        </NavLink>

                    </MDBNavbarItem>
                </MDBNavbarNav>

                </MDBCollapse>

            </MDBContainer>
            </MDBNavbar>
        </>
    )
}

export default NavigationBar;