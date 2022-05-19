import React from 'react';

import Guest from '@/Layouts/Guest';

import { Head, useForm } from '@inertiajs/inertia-react';
import {Button, Form} from "react-bootstrap";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <Guest
            title={'Forgot Password'}
               desc={'Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.'}>
            <Head title="Forgot Password"
           />

            <Form  className="mt-4" onSubmit={submit}>

                <Form.Group id="email" className="mb-4">
                    <Form.Label>Email</Form.Label>

                    <Form.Control autoFocus required
                                  name="email"
                                  value={data.email}
                                  onChange={onHandleChange}
                                  type="email"
                                  isInvalid={errors.email}
                                  placeholder="example@company.com"/>

                    {errors.email &&
                    <div className="invalid-feedback feedback-show">{errors.email}</div>}
                </Form.Group>



                <Button variant="primary" type="submit" className="w-100" disabled={processing }>
                    Email Password Reset Link
                </Button>
            </Form>


        </Guest>
    );
}
