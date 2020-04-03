import React from "react";
import './Login.css';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    // MDBModalFooter,
    MDBIcon,
    MDBCardHeader,
    MDBBtn,
    MDBInput
} from "mdbreact";

const Login = () => {
    return (

            <MDBContainer>
            <MDBRow>
            <MDBCol md="6">
            <MDBCard>
            <MDBCardBody>
            <MDBCardHeader className="form-header deep-blue-gradient rounded">
            <h3 className="my-3">
            <MDBIcon icon="lock" /> Login:
            </h3>
            </MDBCardHeader>
            <form>
            <div className="grey-text">
            <MDBInput
            label="Type your email"
            icon="envelope"
            group
            type="email"
            validate
            error="wrong"
            success="right"
            />
            <MDBInput
            label="Type your password"
            icon="lock"
            group
            type="password"
            validate
            />
            </div>

            <div className="text-center mt-4">
            <MDBBtn
            color="light-blue"
            className="mb-3"
            type="submit"
            >
            Login
            </MDBBtn>
            </div>
            </form>

            </MDBCardBody>
            </MDBCard>
            </MDBCol>
            </MDBRow>
            </MDBContainer>

    );
};

export default Login;