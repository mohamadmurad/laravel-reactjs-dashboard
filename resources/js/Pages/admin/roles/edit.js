import React from 'react';

import {useForm, Head, Link} from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/Authenticated';
import {Breadcrumb} from "react-bootstrap";
import {RolesForm} from "@/Pages/admin/roles/RolesForm";
import {BreadcrumbItem} from "@/Components/Breadcrumb/BreadcrumbItem";

export default function Edit(props) {
    const {role , permissions} = props;

    let permissionsArray = role.permissions.map(a => ({value:a.id,label:a.name}));

    const {data, setData, errors, post, processing} = useForm({
        name: role.name || '',
        permissions: permissionsArray || [],
        _method: 'PUT'
    });

    function handleSubmit(e) {
        e.preventDefault();

        // NOTE: We are using POST method here, not PUT/PACH. See comment above.
        post(route('admin.roles.update', role.id));

    }
    const handleChange = (value,actionMeta) => {
        let val = value.map(a => a.value);
        setData('permissions', val)
    }
    const BreadcrumbItems = <><BreadcrumbItem href={route('admin.roles.index')}>Roles</BreadcrumbItem><BreadcrumbItem
        active>{data.name}</BreadcrumbItem></>;
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            pageTitle={"EditRole"}
            pageDesc={"Edit Role in System"}
            breadcrumb={BreadcrumbItems}
        >
            <Head title="Edit Role" />
            <div>

                <RolesForm
                    submitAction={handleSubmit}
                    setData={setData}
                    data={data}
                    errors={errors}
                    processing={processing}
                    rolesDefaultValue={permissionsArray}
                    rolesHandelChange={handleChange}
                    SelectOptions={permissions}
                    submitText={"Create"}

                />

            </div>
        </Authenticated>


    );

}

