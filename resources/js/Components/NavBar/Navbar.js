import React ,{ useState } from "react";
import { Nav, Navbar, Container } from 'react-bootstrap';
import {NotificationDropdown} from "@/Components/NavBar/NotificationDropdown";
import {UserDropdown} from "@/Components/NavBar/UserDropdown";
import {SearchForm} from "@/Components/NavBar/SearchForm";
import reactHeroLogo from "../../../img/react-hero-logo.svg";

export default ({auth}) => {
   const not = [
        {
            "id": 1,
            "read": false,
            "image": reactHeroLogo,
            "sender": "Jose Leos",
            "time": "a few moments ago",
            "link": "#",
            "message": `Added you to an event "Project stand-up" tomorrow at 12:30 AM.`
        },
        {
            "id": 2,
            "read": false,
            "image": reactHeroLogo,
            "sender": "Neil Sims",
            "time": "2 hrs ago",
            "link": "#",
            "message": `You've been assigned a task for "Awesome new project".`
        },
        {
            "id": 3,
            "read": false,
            "image": reactHeroLogo,
            "sender": "Roberta Casas",
            "time": "5 hrs ago",
            "link": "#",
            "message": `Tagged you in a document called "First quarter financial plans".`
        },
        {
            "id": 4,
            "read": true,
            "image": reactHeroLogo,
            "sender": "Joseph Garth",
            "time": "1 day ago",
            "link": "#",
            "message": `New message: "Hey, what's up? All set for the presentation?"`
        },
        {
            "id": 5,
            "read": true,
            "image": reactHeroLogo,
            "sender": "Jose Leos",
            "time": "2 days ago",
            "link": "#",
            "message": `New message: "We need to improve the UI/UX for the landing page."`
        },
    ]
    const [notifications, setNotifications] = useState(not);



    return (
        <Navbar variant="dark" expanded className="ps-0 pe-2 pb-0">
            <Container fluid className="px-0">
                <div className="d-flex justify-content-between w-100">
                    <SearchForm />
                    <Nav className="align-items-center">
                        <NotificationDropdown
                        notifications={notifications}
                        setNotifications={setNotifications}/>

                        <UserDropdown
                        auth={auth}/>
                    </Nav>
                </div>
            </Container>
        </Navbar>
    );
};
