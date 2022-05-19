import React from 'react';
import {InertiaLink, useForm, Head, Link} from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/Authenticated';
import {Breadcrumb} from "react-bootstrap";

import {RolesForm} from "@/Pages/admin/roles/RolesForm";
import {BreadcrumbItem} from "@/Components/Breadcrumb/BreadcrumbItem";


export default function Create(props) {
    const {data, setData, errors, post, processing} = useForm({
        name: '',
        permissions: [],
    });


    let permissions = props.permissions;

    function handleSubmit(e) {
        e.preventDefault();
        post(route('admin.roles.store'));
    }

    const handleChange = (value, actionMeta) => {

        let val = value.map(a => a.value);

        setData('permissions', val)

    }
    const BreadcrumbItems = <><BreadcrumbItem href={route('admin.roles.index')}>Roles</BreadcrumbItem><BreadcrumbItem
        active>Create Role</BreadcrumbItem></>;
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            pageTitle={"Create New Role"}
            pageDesc={"Create New Role in Your System"}
            breadcrumb={BreadcrumbItems}
        >
            <Head title="Create Role" />
            <div>
                <RolesForm
                    submitAction={handleSubmit}
                    setData={setData}
                    data={data}
                    errors={errors}
                    processing={processing}
                    rolesDefaultValue={data.permissions}
                    rolesHandelChange={handleChange}
                    SelectOptions={permissions}
                    submitText={"Create"}

                />

            </div>
        </Authenticated>


    );

}

