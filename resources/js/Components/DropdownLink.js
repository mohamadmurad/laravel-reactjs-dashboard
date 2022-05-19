import React from 'react';
import {InertiaLink} from "@inertiajs/inertia-react";

export default function DropdownLink ({ href, method = 'post', as = 'a', children }){

    return (
        <InertiaLink
            href={href}
            method={method}
            as={as}
            className="fw-bold dropdown-item">
            {children}
        </InertiaLink>
    );



}
