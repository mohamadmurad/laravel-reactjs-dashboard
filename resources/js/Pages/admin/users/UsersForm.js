import {Card, Col, Form, Row} from "react-bootstrap";
import Select from "react-select";
import React from "react";
import {SubmitButton} from "@/Components/SubmitButton";


export const UsersForm = ({submitAction ,
                              data,errors,processing,rolesDefaultValue,
                              rolesHandelChange,SelectOptions,setData,submitText}) => {


    return (
        <Card border="light" className="bg-white shadow-sm mb-4">
            <Card.Body>
                <Form name="EditForm" onSubmit={submitAction}>
                    <Row>
                        <Col md={6} className="mb-3">

                            <Form.Group id="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    value={data.name}
                                    placeholder="Enter User Name"
                                    onChange={e => setData('name', e.target.value)}
                                />


                                {errors.name &&
                                <div className="invalid-feedback feedback-show">{errors.name}</div>}

                            </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    aria-autocomplete={"none"}
                                    name={'email'}
                                    value={data.email}
                                    placeholder="Enter User Email"
                                    onChange={e => setData('email', e.target.value)}
                                />
                                {errors.email &&
                                <div className="invalid-feedback feedback-show">{errors.email}</div>}
                            </Form.Group>
                        </Col>

                    </Row>
                    <Row>
                        <Col md={6} className="mb-3">
                            <Form.Group id="role">
                                <Form.Label>User Role</Form.Label>
                                <Select
                                    required
                                    defaultValue={rolesDefaultValue}
                                    isMulti
                                    name="roles[]"
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                    onChange={rolesHandelChange}
                                    options={SelectOptions}/>
                                {errors.roles &&
                                <div className="invalid-feedback feedback-show">{errors.roles}</div>}
                            </Form.Group>

                        </Col>
                        <Col md={6} className="mb-3">
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control

                                    type="password"
                                    aria-autocomplete={"none"}
                                    name={'password'}
                                    value={data.password}
                                    placeholder="Enter user password"
                                    onChange={e => setData('password', e.target.value)}
                                />
                                {errors.password &&
                                <div className="invalid-feedback feedback-show">{errors.password}</div>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="mt-3">
                        <SubmitButton text={submitText} processing={processing}/>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );
}
