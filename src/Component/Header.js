import React from 'react'
import { Navbar,Row,Col,NavbarBrand,Container } from 'react-bootstrap'
function Header() {
  return (
    <>
        <Navbar variant='dark' bg="dark" fixed='top'>
        <Container>
          <Row className='w-100'>
            <Col className='text-center p-4'>
              <NavbarBrand>
                <img src="Images/logo.jpeg" width={30} height={30} alt="logo" />
                &nbsp; Welcome To my E-commerce Website
              </NavbarBrand>
            </Col>
            <Col className='text-end p-4'>
              <Navbar.Text>Sign in Here &nbsp;<a href='#'>Click here</a></Navbar.Text>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
