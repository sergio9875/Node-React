
import React from 'react'
import './Login.css';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBInput
} from "mdbreact";

const Login = (props) => {

    // let postsElement = props.posts.map((p, index) =>
    //     < div key={index} message={p.message}/>)

    let onAddLogin = () => {
        props.addLogin();
    }

    let onChangeLogin = (e) => {
        let text = e.target.value;
        props.updateLoginText(text); }


    return (


        <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                    <form>
                        <p className="h5 text-center mb-4">Sign in</p>
                        <div className="grey-text">
                            <MDBInput label="Type your login"
                                     // value={state.login}
                                      onChange={onChangeLogin}
                                      icon="envelope"  validate error="wrong"
                                      success="right" />
                            <MDBInput label="Type your password"
                                      // value={state.password}
                                     // onChange={onChangePassword}
                                      icon="lock" group type="password" validate />
                        </div>
                        <div className="text-center">
                            <MDBBtn onClick={onAddLogin} >Login</MDBBtn>
                            <div> {props.loginText} </div>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );


};

export default Login;
