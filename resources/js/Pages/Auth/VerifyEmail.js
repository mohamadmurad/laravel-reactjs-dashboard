import React from 'react';
import Guest from '@/Layouts/Guest';
import {Head, Link, useForm} from '@inertiajs/inertia-react';
import {Button, Form} from "react-bootstrap";

export default function VerifyEmail({status}) {
    const {post, processing} = useForm();

    const submit = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <Guest
            title={'Email Verification'}
            desc={'Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn\'t receive the email, we will gladly send you another.'}>
            <Head title="Email Verification"/>

            <Form className="mt-4" onSubmit={submit}>

                <div className="d-flex justify-content-between align-items-center mb-4 flex-column gap-2">
                    <Button variant="primary" type="submit" className="w-100" disabled={processing}>
                        Resend Verification Email
                    </Button>

                    <Link
                        href={route('logout')}
                        method="post"
                        className="text-underline"
                    >
                        Log Out
                    </Link>
                </div>
            </Form>
        </Guest>
    );
}
