import {Card, Col, Form, Row} from "react-bootstrap";
import Select from "react-select";
import React from "react";
import {SubmitButton} from "@/Components/SubmitButton";


export const RolesForm = ({
                              submitAction,
                              data, errors, processing, rolesDefaultValue,
                              rolesHandelChange, SelectOptions, setData, submitText
                          }) => {


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
                            <Form.Group id="role">
                                <Form.Label>User Role</Form.Label>
                                <Select
                                    defaultValue={rolesDefaultValue}
                                    isMulti
                                    name="permissions[]"
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                    onChange={rolesHandelChange}
                                    required={true}
                                    options={SelectOptions}/>
                                {errors.roles &&
                                <div className="invalid-feedback feedback-show">{errors.roles}</div>}
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
