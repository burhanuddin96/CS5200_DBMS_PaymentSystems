import React from 'react';
import { Container, Card, Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import CardBody from "reactstrap/es/CardBody";
import CardTitle from "reactstrap/es/CardTitle";
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };

        if(props.props.isAuthenticated) {
            return <Redirect to="/home"/>
        }
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.post('/users/login', this.state)
            .then(resp => {
                const user = resp.data[0]
                if (!user) {
                    alert('Login Unsuccessful. Please try again.')
                } else {
                    this.props.props.userAuth(true);
                    this.props.props.setUser(user);
                    this.props.history.push("/home");
                }
            }).catch(error => {
                console.log(error);
        });
    }

    render() {
        return (
            <Container className="Login container">
                <Row>
                <Col sm={{size: 6, offset: 3}}>
                <Card className="login_card">
                    <CardBody>
                        <CardTitle> Login </CardTitle>
                        <Form className="form">
                            <Col>
                                <FormGroup>
                                    <Label for="username">Username </Label>
                                    <Input id="username" name="email" type="email" value={this.state.username}
                                           onChange={this.handleChange}/>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="password">Password </Label>
                                    <Input id="password" name="password" type="password" value={this.state.password}
                                           onChange={this.handleChange}/>
                                </FormGroup>
                            </Col>
                            <Button block disabled={!this.validateForm()} type="submit" onClick={this.handleSubmit}> Login </Button>
                        </Form>
                    </CardBody>
                </Card>
                </Col>
                </Row>
            </Container>
        );
    }
}