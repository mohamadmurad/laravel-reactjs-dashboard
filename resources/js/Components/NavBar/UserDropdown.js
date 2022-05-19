import {Dropdown, Image, Nav} from "react-bootstrap";
import DropdownLink from "@/Components/DropdownLink";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleUser, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const UserDropdown = ({auth}) =>{

    return (
        <Dropdown as={Nav.Item}>
            <Dropdown.Toggle as={Nav.Link} className="pt-1 px-0">
                <div className="media d-flex align-items-center">
                    {auth.user.avatar && <Image src={auth.user.avatar} className="user-avatar md-avatar rounded-circle" />}

                    <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                        <span className="mb-0 font-small fw-bold">{auth.user.name}</span>
                    </div>
                </div>
            </Dropdown.Toggle>
            <Dropdown.Menu className="user-dropdown dropdown-menu-right mt-2">
                {auth.can.profile_edit &&
                    <DropdownLink href={route('dashboard')} method="post" as="button">
                        <FontAwesomeIcon icon={faCircleUser} className=" me-2"/> My Profile
                    </DropdownLink>
                }
                {/*<DropdownLink href={route('dashboard')} method="post" as="button">*/}
                {/*    <FontAwesomeIcon icon={faEnvelopeOpen} className=" me-2" /> Messages*/}
                {/*</DropdownLink>*/}

                {/*<DropdownLink href={route('dashboard')} method="post" as="button">*/}
                {/*    <FontAwesomeIcon icon={faEnvelopeOpen} className=" me-2" /> Settings*/}
                {/*</DropdownLink>*/}

                <Dropdown.Divider />
                <DropdownLink href={route('logout')} method="post" as="button">
                    <FontAwesomeIcon icon={faSignOutAlt} className="text-danger me-2" /> Logout
                </DropdownLink>

            </Dropdown.Menu>
        </Dropdown>
    );
}
