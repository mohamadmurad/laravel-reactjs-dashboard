import React, { useEffect } from 'react';
import Guest from '@/Layouts/Guest';
import { Head, useForm } from '@inertiajs/inertia-react';
import {Button, Form} from "react-bootstrap";

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('password.confirm'));
    };

    return (
        <Guest
        title={'Confirm Password'}
        desc={'This is a secure area of the application. Please confirm your password before continuing.'}>

            <Head title="Confirm Password" />
            <Form  className="mt-4" onSubmit={submit}>

                <Form.Group id="password" className="mb-4">
                    <Form.Label>Password</Form.Label>

                    <Form.Control autoFocus required
                                  name="password"
                                  value={data.password}
                                  onChange={onHandleChange}
                                  type="password"
                                  isInvalid={errors.password}
                                  placeholder=""/>

                    {errors.password &&
                    <div className="invalid-feedback feedback-show">{errors.password}</div>}
                </Form.Group>



                <Button variant="primary" type="submit" className="w-100" disabled={processing }>
                    Confirm
                </Button>
            </Form>

        </Guest>
    );
}
