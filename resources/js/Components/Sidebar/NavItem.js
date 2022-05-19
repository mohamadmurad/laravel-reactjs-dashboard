import {Badge, Image, Nav} from "react-bootstrap";
import {InertiaLink} from "@inertiajs/inertia-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

export const NavItem = (props) => {
    const {
        title,
        routeName,
        external,
        target,
        icon,
        image,
        badgeText,
        badgeBg = "secondary",
        badgeColor = "primary",
        setShow
    } = props;

    const classNames = badgeText ? "d-flex justify-content-start align-items-center justify-content-between" : "";

    const navItemClassName =  route().current(routeName) ? "active" : "";
    //  const linkProps = external ? {href: link} : {as: link, to: link};
    const linkProps = {href: route(routeName)} ;

    return (
        <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
            <InertiaLink  {...linkProps} target={target} className={'nav-link ' + classNames}>
          <span>
            {icon ? <span className="sidebar-icon"><FontAwesomeIcon icon={icon}/> </span> : null}
              {image ? <Image src={image} width={20} height={20} className="sidebar-icon svg-icon"/> : null}

              <span className="sidebar-text">{title}</span>
          </span>
                {badgeText ? (
                    <Badge pill bg={badgeBg} text={badgeColor}
                           className="badge-md notification-count ms-2">{badgeText}</Badge>
                ) : null}
            </InertiaLink>
        </Nav.Item>
    );
};
