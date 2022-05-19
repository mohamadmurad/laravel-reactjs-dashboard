import React, {useEffect} from 'react';
import Guest from '@/Layouts/Guest';
import {Link, useForm,Head} from '@inertiajs/inertia-react';
import { Form, Button, FormCheck} from 'react-bootstrap';


export default function Login({status, canResetPassword}) {
    const {data, setData, post, processing, errors, reset} = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <Guest
            title={'Sign in to our platform'}>
            <Head title="Login" />

            <Form className="mt-4" onSubmit={submit}>
                <Form.Group id="email" className="mb-4">
                    <Form.Label>Your Email</Form.Label>

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
                <Form.Group>
                    <Form.Group id="password" className="mb-4">
                        <Form.Label>Your Password</Form.Label>

                        <Form.Control required
                                      type="password"
                                      name="password"
                                      value={data.password}
                                      isInvalid={errors.password}
                                      onChange={onHandleChange}
                                      placeholder="Password"/>

                        {errors.password &&
                        <div className="invalid-feedback feedback-show">{errors.password}</div>}
                    </Form.Group>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <Form.Check type="checkbox">
                            <FormCheck.Input id="defaultCheck5"
                                             name="remember"
                                             value={data.remember}
                                             onChange={onHandleChange}
                                             className="me-2"/>
                            <FormCheck.Label htmlFor="defaultCheck5" className="mb-0">Remember
                                me</FormCheck.Label>
                        </Form.Check>
                        {canResetPassword &&
                        <Link className="small text-end" href={route('password.request')}>Lost
                            password?</Link>}
                    </div>
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100" disabled={processing}>
                    Sign in
                </Button>
            </Form>
            <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Not registered?
                    <Link href={route('register')} className="fw-bold">
                      {` Create account `}
                    </Link>
                  </span>
            </div>

        </Guest>
    );
}
