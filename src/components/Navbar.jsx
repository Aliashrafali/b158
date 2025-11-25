import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <>
            
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 p-0 m-0">
                            <div className="menu">
                                <nav>
                                    <ul>
                                        <li><NavLink to={'/'} className={'nav'}>Home</NavLink></li>
                                        <li><NavLink to={'/About'} className={'nav'}>About Us</NavLink></li>
                                        <li><NavLink to={'/'} className={'nav'}>Gallery</NavLink></li>
                                        <li><NavLink to={'/'} className={'nav'}>Courses</NavLink></li>
                                        <li><NavLink to={'/'} className={'nav'}>Admission</NavLink></li>
                                        <li><NavLink to={'/'} className={'nav'}>Contact Us</NavLink></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar