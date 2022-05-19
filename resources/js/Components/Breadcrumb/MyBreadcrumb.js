import {Breadcrumb} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {Link} from "@inertiajs/inertia-react";
import {BreadcrumbItem} from "@/Components/Breadcrumb/BreadcrumbItem";


export default function MyBreadcrumb ({children}){


    return (
        <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>

            <BreadcrumbItem  href={route('dashboard')}><FontAwesomeIcon icon={faHome} /></BreadcrumbItem>
            {children}
        </Breadcrumb>
    )
}
