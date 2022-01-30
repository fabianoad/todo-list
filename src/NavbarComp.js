import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

class NavbarComp extends React.Component {

    render() {

        return <React.Fragment>

            <Navbar bg="dark" variant="dark" className="mb-4 mt-1">
                <Navbar.Brand className="font-weight-bold">
                  TODO List
                </Navbar.Brand>
            </Navbar>


        </React.Fragment>



    }
}

export default NavbarComp;