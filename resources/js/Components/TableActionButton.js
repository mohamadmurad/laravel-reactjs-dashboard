
import {InertiaLink} from "@inertiajs/inertia-react";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen,faTrash} from "@fortawesome/free-solid-svg-icons";


export default function TableActionButton  ({customClass ,onClick , isDelete = false, route , children}) {

    const className = "me-2 " + customClass ?? "";

    return (
        <InertiaLink
            className={className}

            href={route}
            onClick={onClick}
        >
            {isDelete && <><FontAwesomeIcon icon={faTrash} className="text-danger me-2" /> Delete</>}
            {!isDelete && <><FontAwesomeIcon icon={faPen} className=" me-2" /> Edit</>}
            {children}
        </InertiaLink>
    );
}
