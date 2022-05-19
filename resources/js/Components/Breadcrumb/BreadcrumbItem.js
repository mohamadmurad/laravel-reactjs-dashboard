import {Link} from "@inertiajs/inertia-react";


export const BreadcrumbItem = ({href, active, children}) => {
    let ItemClass = 'breadcrumb-item ';
    if (active) {
        ItemClass = ItemClass + 'active';
    }


    return (
        <>
            {active
                ?
                <span  className={ItemClass}>
                    {children}
                </span>
                :
                <Link href={href} className={ItemClass}>
                    {children}
                </Link>}

        </>

    );

}
