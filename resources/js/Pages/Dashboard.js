import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import {Head, InertiaLink} from '@inertiajs/inertia-react';
import {Breadcrumb} from "react-bootstrap";

export default function Dashboard(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            flash={props.flash}
            pageTitle={"Dashboard"}
            pageDesc={"Your Dashboard"}
            breadcrumb={''}
            pageHeaderChild={''}
        >
            <Head title="Dashboard" />


                        <div className="">You're logged in!</div>

        </Authenticated>
    );
}
