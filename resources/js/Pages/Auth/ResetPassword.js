import React, { useEffect } from 'react';
import Guest from '@/Layouts/Guest';
import {Head, useForm} from '@inertiajs/inertia-react';
import {Button, Form} from "react-bootstrap";

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('password.update'));
    };

    return (
        <Guest
            title={'Reset Password'}

            >
            <Head title="Reset Password" />
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

                <Form.Group id="password" className="mb-4">
                    <Form.Label>Your Password</Form.Label>

                    <Form.Control required
                                  type="password"
                                  name="password"
                                  value={data.password}
                                  onChange={onHandleChange}
                                  isInvalid={errors.password_confirmation}
                                  isValid={data.password_confirmation === data.password && data.password}
                                  placeholder="Password"/>

                    {errors.password &&
                    <div className="invalid-feedback feedback-show">{errors.password}</div>}
                </Form.Group>


                <Form.Group id="password_confirmation" className="mb-4">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control required
                                  type="password"
                                  name="password_confirmation"
                                  value={data.password_confirmation}
                                  onChange={onHandleChange}
                                  autoComplete="new-password"
                                  isValid={data.password_confirmation === data.password && data.password}
                                  isInvalid={errors.password_confirmation || (data.password_confirmation !== data.password && data.password_confirmation )}
                                  placeholder=""/>
                    <Form.Control.Feedback type="invalid">
                        Confirm password must same password
                    </Form.Control.Feedback>

                    {errors.password_confirmation &&
                    <div className="invalid-feedback feedback-show">{errors.password_confirmation}</div>}
                </Form.Group>


                <Button variant="primary" type="submit" className="w-100" disabled={processing }>
                    Reset Password
                </Button>
            </Form>
        </Guest>
    );
}
