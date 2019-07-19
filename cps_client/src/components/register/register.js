import React from 'react';
import { Card, Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import CardBody from "reactstrap/es/CardBody";
import CardTitle from "reactstrap/es/CardTitle";
import axios from 'axios';

export default class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            contact: "",
            bank_id: "",
            bank_acc_no: "",
            ssn: ""
        };

        this.formRef = React.createRef();
    }

    validateForm() {
        return this.state.first_name.length > 0
            && this.state.email.length > 0
            && this.state.password.length > 0
            && this.state.contact.length > 0
            && this.state.bank_id.length > 0
            && this.state.bank_acc_no.length > 0
            && this.state.ssn.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        axios.post('/users/register', this.state)
            .then(resp => {
                this.props.history.push("/login");
                // const user = resp.data[0]
                // if (!user) {
                //     alert('Login Unsuccessful. Please try again.')
                // } else {
                //     this.props.props.userAuth(true);
                //     this.props.props.setUser(user);
                //     this.props.history.push("/home");
                // }
            }).catch(error => {
                alert('Something went wrong. Please try again');
                this.formRef.current.reset();
                console.log(error);
        });
    }

    render() {
        return (
            <Row className="Register">
                <Col sm={{size: 10, offset: 1}}>
                    <Card className="register_card">
                        <CardBody>
                            <CardTitle> Register </CardTitle>
                            <Form innerRef={this.formRef} className="form">
                                <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="first_name">First Name </Label>
                                        <Input id="first_name" name="first_name" type="text" value={this.state.first_name}
                                               onChange={this.handleChange}/>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label for="last_name">Last Name </Label>
                                        <Input id="last_name" name="last_name" type="text" value={this.state.last_name}
                                               onChange={this.handleChange}/>
                                    </FormGroup>
                                </Col>
                                </Row>
                                <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="email">Email </Label>
                                        <Input id="email" name="email" type="email" value={this.state.email}
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
                                </Row>
                                <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="contact">Contact </Label>
                                        <Input id="contact" name="contact" type="text" value={this.state.contact}
                                               onChange={this.handleChange}/>
                                    </FormGroup>
                                </Col>
                                </Row>
                                <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="bank_id">Bank </Label>
                                        <Input id="bank_id" name="bank_id" type="text" value={this.state.bank_id}
                                               onChange={this.handleChange}/>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label for="bank_acc_no">Account Number </Label>
                                        <Input id="bank_acc_no" name="bank_acc_no" type="text" value={this.state.bank_acc_no}
                                               onChange={this.handleChange}/>
                                    </FormGroup>
                                </Col>
                                </Row>
                                <Col sm={{size: 5}}>
                                    <FormGroup>
                                        <Label for="ssn">SSN </Label>
                                        <Input id="ssn" name="ssn" type="password" value={this.state.ssn}
                                               onChange={this.handleChange}/>
                                    </FormGroup>
                                </Col>
                                <Button block disabled={!this.validateForm()} type="submit" onClick={this.handleSubmit}> Register </Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    }
}