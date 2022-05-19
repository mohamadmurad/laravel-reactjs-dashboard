import {Accordion, Nav} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";


export const CollapsableNavItem = (props) => {

    const {eventKey, title, icon, children = null} = props;
    const defaultKey = route().current().indexOf(eventKey) !== -1 ? eventKey : "";

    return (
        <Accordion as={Nav.Item} defaultActiveKey={defaultKey}>
            <Accordion.Item eventKey={eventKey}>
                <Accordion.Button as={Nav.Link} className="d-flex justify-content-between align-items-center">
            <span>
              <span className="sidebar-icon"><FontAwesomeIcon icon={icon}/> </span>
              <span className="sidebar-text">{title}</span>
            </span>
                </Accordion.Button>
                <Accordion.Body className="multi-level">
                    <Nav className="flex-column">
                        {children}
                    </Nav>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};
