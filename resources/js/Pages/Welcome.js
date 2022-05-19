import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <div className="d-flex justify-content-center align-items-center mt-5">

                    {props.auth.user ? (
                        <Link href={route('dashboard')} className="">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link href={route('login')} className="btn btn-primary">
                                Log in
                            </Link>

                            <Link href={route('register')} className="btn btn-info">
                                Register
                            </Link>
                        </>
                    )}



            </div>
        </>
    );
}
