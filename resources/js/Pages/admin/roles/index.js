import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Inertia } from '@inertiajs/inertia';
import {Head, InertiaLink} from '@inertiajs/inertia-react';
import {Breadcrumb, Card, Table} from "react-bootstrap";
import TableActionButton from "@/Components/TableActionButton";
import {BreadcrumbItem} from "@/Components/Breadcrumb/BreadcrumbItem";


export default function Dashboard(props) {
    let data = props.roles;

    let destroy = (id) => {
        if (confirm('Are you sure you want to delete this role?')) {

            Inertia.delete(route('admin.roles.destroy', id));
        }
    }
    const BreadcrumbItems = <><BreadcrumbItem active>Roles</BreadcrumbItem></>;
    let auth = props.auth;
    return (

        <Authenticated
            auth={props.auth}
            errors={props.errors}
            flash={props.flash}
            pageTitle={"Roles List"}
            pageDesc={"Manage Your Roles"}
            breadcrumb={BreadcrumbItems}
            pageHeaderChild={auth.can.role_create && <InertiaLink  href={route('admin.roles.create')} className={'btn btn-primary'}>Create</InertiaLink>}
        >
            <Head title="Roles" />
            <Card border="light" className="shadow-sm mb-4">
                <Card.Body className="pb-0">
                    <Table responsive className="table-centered table-nowrap rounded mb-0">
                        <thead className="thead-light">
                        <tr>
                            <th className="border-0">id</th>
                            <th className="border-0">name</th>
                            <th className="border-0">permissions</th>
                            <th className="border-0">action</th>

                        </tr>
                        </thead>
                        <tbody>
                        {
                            data.map(({id,name,permissions})=>(
                                <tr key={id}>
                                    <td className="border-0">{id}</td>
                                    <td className="border-0">{name}</td>
                                    <td className="fw-bold border-0 break-spaces" >{permissions.map(({id,name})=>(
                                        <span className="badge badge-primary me-2" key={id}>{name}</span>
                                    ))}</td>

                                    <td className="border-0">

                                        <TableActionButton
                                            route={route('admin.roles.edit', id)}
                                        >

                                        </TableActionButton>

                                        <TableActionButton
                                            onClick={() =>{destroy(id)}}
                                            isDelete
                                        >

                                        </TableActionButton>



                                    </td>
                                </tr>
                            ))
                        }
                        {data.length === 0 && (
                            <tr>
                                <td className="px-6 py-4 border-t" colSpan="4">
                                    No Roles found.
                                </td>
                            </tr>
                        )}

                        </tbody>
                    </Table>
                </Card.Body>
            </Card>




        </Authenticated>
    );
}
