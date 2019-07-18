import React, { Fragment} from 'react';
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
        console.log('Props topbar', this.props);
    }

    toggle() {
        this.setState({
           isOpen: !this.state.isOpen
        });
    }

    handleLogout = event => {
        this.props.userAuth(false);
        this.props.setUserId(null);
    }

    render() {
        return (
            <div className="Topbar">
                <Navbar color="light" expand="md">
                    <NavbarBrand>
                        <Link to="/">CONSOLIDATED PAYMENT SYSTEM</Link>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav pills>
                            {this.props.isAuthenticated
                                ?
                                <Fragment>
                                    <NavItem>
                                        <Link onClick={this.handleLogout}>LOGOUT</Link>
                                    </NavItem>
                                </Fragment>
                                :
                                <Fragment>
                                    <NavItem>
                                        <Link href="/login">LOGIN</Link>
                                    </NavItem>
                                    &nbsp;&nbsp;
                                    <NavItem>
                                        <Link to="/register">REGISTER</Link>
                                    </NavItem>
                                </Fragment>
                            }
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}