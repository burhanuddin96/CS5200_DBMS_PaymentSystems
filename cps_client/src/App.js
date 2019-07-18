import React, { Fragment } from 'react';
import Routes from './Routes';
import './App.css';
import { Nav, Navbar, NavbarBrand, NavItem, NavbarToggler, Collapse} from "reactstrap";
import {Link} from "react-router-dom";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false,
            user: null
        }
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
            <div className="App">
                <Navbar color="light" expand="sm" fixed="top">
                    <NavbarBrand>
                        <Link to="/home">CONSOLIDATED PAYMENT SYSTEM</Link>
                    </NavbarBrand>
                    {this.state.isAuthenticated
                        ?
                        <Fragment>
                            <Nav className="mr-auto">
                                <NavItem> ABC </NavItem>
                            </Nav>
                            <Nav className="ml-auto">
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
                </Navbar>
                <Routes authProps={authProps}/>
            </div>
        );
    }


}

export default App;
