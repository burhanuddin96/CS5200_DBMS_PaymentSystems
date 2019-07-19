import React, { Fragment } from 'react';
import Routes from './Routes';
import './App.css';
import { Nav, Navbar, NavbarBrand, NavItem, NavbarToggler, Collapse} from "reactstrap";
import {Link} from "react-router-dom";
import {Container, Row} from "react-bootstrap";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false,
            user: null,
            isOpen: false
        }
        this.toggle = this.toggle.bind(this);

    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    authenticateUser = authenticated => {
        this.setState({ isAuthenticated: authenticated });
    }

    setUser = user => {
        this.setState( {user: user});
    }

    handleLogout = event => {
        this.authenticateUser(false);
        this.setUser(null);
    }

    render() {
        const authProps = {
            isAuthenticated: this.state.isAuthenticated,
            user: this.state.user,
            userAuth: this.authenticateUser,
            setUser: this.setUser
        };

        return (
            <Container className="App">
                <Row>
                <Navbar color="light" expand="sm" fixed="top">
                    <NavbarBrand>
                        <Link to="/home">CONSOLIDATED PAYMENT SYSTEM</Link>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                    {this.state.isAuthenticated
                        ?
                        <Fragment>
                            <Nav className="mr-auto">
                                <NavItem> ABC </NavItem>
                            </Nav>
                            <Nav className="ml-auto">
                                Welcome, {this.state.user ? this.state.user.first_name : ''}
                                &nbsp;&nbsp;
                                <NavItem>
                                    <Link to="/login" onClick={this.handleLogout}>LOGOUT</Link>
                                </NavItem>
                            </Nav>
                        </Fragment>
                        :
                        <Fragment>
                            <Nav pills>
                                <NavItem>
                                    <Link to="/login">LOGIN</Link>
                                </NavItem>
                                &nbsp;&nbsp;
                                <NavItem>
                                    <Link to="/register">REGISTER</Link>
                                </NavItem>
                            </Nav>
                        </Fragment>
                    }
                    </Collapse>
                </Navbar>
                </Row>
                <Routes authProps={authProps}/>
            </Container>
        );
    }


}

export default App;
