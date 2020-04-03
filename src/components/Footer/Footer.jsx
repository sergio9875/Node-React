import React from "react";
import {MDBCol, MDBContainer, MDBRow, MDBFooter} from "mdbreact";

const Footer = () => {
    return (
        <MDBFooter color="cyan" className="font-small darken-3 pt-0">
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="12" className="py-5">
                        <div className="mb-5 flex-center">


                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/plasticine/100/000000/linkedin.png" alt=""/>
                            </a>

                            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/plasticine/100/000000/google-plus.png" alt=""/>
                            </a>

                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/plasticine/100/000000/facebook.png" alt=""/>
                            </a>

                            <a href="https://react.js" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/clouds/100/000000/react.png" alt=""/>
                            </a>

                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/clouds/100/000000/youtube.png" alt=""/>
                            </a>

                            <a href="https://database.net" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/bubbles/100/000000/database.png" alt=""/>
                            </a>


                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            {/*<div className="footer-copyright text-center py-3">*/}
            {/*    <MDBContainer >*/}
            {/*        <img src="https://img.icons8.com/ios-filled/50/000000/copyright.png"/>*/}
            {/*    </MDBContainer>*/}
            {/*</div>*/}
        </MDBFooter>
    );
}


export default Footer;


// <a href="https://www.google.com">Google</a>