import React from 'react';
import {Col, Container, Row} from "react-bootstrap";


export default function Guest({title,desc,children}) {
    return (
        <div>
            <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
                <Container>
                    <Row className="justify-content-center form-bg-image">
                        <Col xs={12} className="d-flex align-items-center justify-content-center">
                            <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                                <div className="text-center text-md-center mb-4 mt-md-0">
                                    <h3 className="mb-0">{title}</h3>
                                    {desc &&
                                    <p className="mb-4 text-start">{desc}</p>}

                                </div>

                                {status === 'verification-link-sent' ?
                                 <div className="mb-4 font-medium text-sm text-green-600">
                                      A new verification link has been sent to the email address you provided during registration.
                                    </div> :
                                    status &&
                                    <div className="alert alert-success">
                                        {status}
                                    </div>
                                }



                                {children}
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>

        </div>
    );
}
