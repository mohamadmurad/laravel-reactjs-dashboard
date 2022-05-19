import React, {useState} from "react";
import SimpleBar from 'simplebar-react';
import {CSSTransition} from 'react-transition-group';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faChartPie,
    faSignOutAlt, faLock, faTimes, faUsers,
} from "@fortawesome/free-solid-svg-icons";

import {Nav, Image, Button, Dropdown, Navbar} from 'react-bootstrap';
import {InertiaLink} from "@inertiajs/inertia-react";
import {NavItem} from "@/Components/Sidebar/NavItem";
import {CollapsableNavItem} from "@/Components/Sidebar/CollapsableNavItem";


export default ({auth}) => {

    const [show, setShow] = useState(false);
    const showClass = show ? "show" : "";

    const onCollapse = () => setShow(!show);


    return (
        <>
            <Navbar expand={false} collapseOnSelect variant="dark" className="navbar-theme-primary px-4 d-md-none">
                <Navbar.Brand className="me-lg-5" to={route('dashboard')}>
                    {/*<Image src={null} className="navbar-brand-light" />*/}
                </Navbar.Brand>
                <Navbar.Toggle as={Button} aria-controls="main-navbar" onClick={onCollapse}>
                    <span className="navbar-toggler-icon"/>
                </Navbar.Toggle>
            </Navbar>
            <CSSTransition timeout={300} in={show} classNames="sidebar-transition">
                <SimpleBar className={`collapse ${showClass} sidebar d-md-block bg-primary text-white`}>
                    <div className="sidebar-inner px-4 pt-3">
                        <div
                            className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
                            <div className="d-flex align-items-center">
                                {auth.user.avatar
                                && <div className="user-avatar lg-avatar me-4">
                                    <Image src={null} className="card-img-top rounded-circle border-white"/>
                                </div>}

                                <div className="d-block">
                                    <h6>Hi, Jane</h6>
                                    <InertiaLink href={route('logout')} method="post" as="button"
                                                 className={'text-dark btn btn-secondary btn-xs'}>
                                        <FontAwesomeIcon icon={faSignOutAlt} className="me-2"/> Sign Out
                                    </InertiaLink>
                                </div>
                            </div>
                            <Nav.Link className="collapse-close d-md-none" onClick={onCollapse}>
                                <FontAwesomeIcon icon={faTimes}/>
                            </Nav.Link>
                        </div>
                        <Nav className="flex-column pt-3 pt-md-0">
                            <NavItem title="Overview" routeName={'dashboard'} icon={faChartPie} badgeText="Pro" setShow={setShow}/>
                            <Dropdown.Divider className="my-3 border-indigo"/>
                            {auth.can.user_access &&
                            <CollapsableNavItem eventKey="users" title="Users" icon={faUsers}>
                                <NavItem title="Users List" routeName={'admin.users.index'} setShow={setShow}/>
                                {auth.can.user_create &&
                                <NavItem title="Create Users" routeName={'admin.users.create'} setShow={setShow}/>
                                }

                            </CollapsableNavItem>
                            }

                            {auth.can.role_access &&
                            <CollapsableNavItem eventKey="roles" title="Roles" icon={faLock}>
                                <NavItem title="Roles List" routeName={'admin.roles.index'} setShow={setShow}/>
                                {auth.can.role_create &&
                                <NavItem title="Create Role" routeName={'admin.roles.create'} setShow={setShow}/>
                                }

                            </CollapsableNavItem>
                            }

                        </Nav>
                    </div>
                </SimpleBar>
            </CSSTransition>
        </>
    );
};
