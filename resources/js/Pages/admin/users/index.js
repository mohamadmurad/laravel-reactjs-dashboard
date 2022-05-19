import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Inertia } from '@inertiajs/inertia';
import {Head, InertiaLink} from '@inertiajs/inertia-react';
import { Table ,Breadcrumb ,Card} from 'react-bootstrap';
import Swal from 'sweetalert2'
import TableActionButton from "@/Components/TableActionButton";
import {BreadcrumbItem} from "@/Components/Breadcrumb/BreadcrumbItem";


export default function Dashboard(props) {
    let data = props.users;

    let destroy = (id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-danger m-1',
                cancelButton: 'btn btn-success m-1'
            },
            buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true,
            didOpen: () => {
                // `MySwal` is a subclass of `Swal` with all the same instance & static methods
                //destroyAlert.sh()
            },
        }).then((result) => {

            if(result.isConfirmed){
                Inertia.delete(route('admin.users.destroy', id));
            }
            // return MySwal.fire(<p>Shorthand works too</p>)
        })

        // if (confirm('Are you sure you want to delete this user?')) {
        //
        //     Inertia.delete(route('admin.users.destroy', id));
        // }
    }
    let auth = props.auth;
    const BreadcrumbItems = <><BreadcrumbItem active>Users</BreadcrumbItem></>;
    return (

        <Authenticated
            auth={props.auth}
            errors={props.errors}
            pageTitle={"Users List"}
            pageDesc={"Manage Your Users"}
            breadcrumb={BreadcrumbItems}
            pageHeaderChild={auth.can.user_create && <InertiaLink href={route('admin.users.create')} className={'btn btn-primary'}>Create</InertiaLink>}
        >
            <Head title="Users" />
            {/*<Head title="Users" />*/}
            {/*Breadcrumb*/}


            <Card border="light" className="shadow-sm mb-4">
                <Card.Body className="pb-0">
                    <Table responsive className="table-centered table-nowrap rounded mb-0">
                        <thead className="thead-light">
                        <tr>
                            <th className="border-0">id</th>
                            <th className="border-0">name</th>
                            <th className="border-0">email</th>
                            <th className="border-0">roles</th>
                            <th className="border-0">deleted_at</th>
                            <th className="border-0">action</th>

                        </tr>
                        </thead>
                        <tbody>
                        {
                            data.map(({id,name,email,deleted_at,roles})=>(
                                <tr key={id}>
                                    <td className="border-0">{id}</td>
                                    <td className="border-0">{name}
                                        {deleted_at && (
                                            deleted
                                        )}
                                    </td>
                                    <td className="border-0">{email}</td>
                                    <td className="fw-bold border-0">{roles.map(({id,name})=>(
                                        <span className="badge badge-primary me-2" key={id}>{name}</span>
                                    ))}</td>
                                    <td className="border-0">{deleted_at}</td>
                                    <td className="border-0">

                                        <TableActionButton
                                            route={route('admin.users.edit', id)}
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
                                    No users found.
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
