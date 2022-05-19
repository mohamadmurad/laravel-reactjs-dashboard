import React, {useState} from 'react';
import FlashMessage from "@/Components/FlashMessage";
import Sidebar from "@/Components/Sidebar/Sidebar";
import Navbar from "@/Components/NavBar/Navbar";
import MyBreadcrumb from "@/Components/Breadcrumb/MyBreadcrumb";

export default function Authenticated({
                                          auth,
                                          flash,
                                          breadcrumb,
                                          pageDesc,
                                          pageTitle,
                                          pageHeaderChild,
                                          children
                                      }) {

    return (

        <React.StrictMode>
            <div className="min-h-screen bg-gray-100">
                <Sidebar
                    auth={auth}/>
                <main className="content">
                    <Navbar
                    auth={auth}
                    />

                    <FlashMessage/>
                    <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                        <div className="d-block mb-4 mb-xl-0">
                            <MyBreadcrumb>

                                {breadcrumb}

                            </MyBreadcrumb>

                            {pageTitle && <h4>{pageTitle}</h4>}

                            {pageDesc && <p className="mb-0">{pageDesc}</p>}

                        </div>
                        {pageHeaderChild && pageHeaderChild}

                    </div>
                    {children}
                </main>
            </div>
        </React.StrictMode>
    );
}
