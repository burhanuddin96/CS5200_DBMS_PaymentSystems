import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import './topbar.css';

export default class Topbar extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
           isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div className="Topbar">
                <Navbar color="dark" expand="md">
                    <NavbarBrand>
                        <Link to="/">CONSOLIDATED PAYMENT SYSTEM</Link>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to="/login">LOGIN</Link>
                            </NavItem>
                            &nbsp;&nbsp;
                            <NavItem>
                                <Link to="/register">REGISTER</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}