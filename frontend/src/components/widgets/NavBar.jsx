import React from 'react'
import {Link, Switch} from "react-router-dom"

function NavBar() {
    return (
        <div>
            <ul>
                <Switch>
                    <Link to="/index">Home</Link>
                </Switch>
                <Switch>
                    <Link to="/about">Our team</Link>
                </Switch>
                <Switch>
                    <Link to="/schedule">Photos</Link>
                </Switch>
                <Switch>
                    <Link to="/contact">Blog</Link>
                </Switch>
            </ul>
            <header class="header-area">
                <div class="classy-nav-container breakpoint-off">
                    <div class="container">
                        {/* <!-- Classy Menu --> */}
                        <nav class="classy-navbar justify-content-between" id="conferNav">

                            {/* <!-- Logo --> */}
                            <a class="nav-brand" href="./index.html"><img src="./img/core-img/logo.png" alt=""/></a>

                            {/* <!-- Navbar Toggler --> */}
                            <div class="classy-navbar-toggler">
                                <span class="navbarToggler"><span></span><span></span><span></span></span>
                            </div>

                            {/* <!-- Menu --> */}
                            <div class="classy-menu">
                                {/* <!-- Menu Close Button --> */}
                                <div class="classycloseIcon">
                                    <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                                </div>
                                {/* <!-- Nav Start --> */}
                                <div class="classynav">
                                    <ul id="nav">
                                        <li class="active"><a href="index.html">Home</a></li>
                                        <li><a href="#">Pages</a>
                                            <ul class="dropdown">
                                                <li><a href="index.html">- Home</a></li>
                                                <li><a href="about.html">- About Us</a></li>
                                                <li><a href="speakers.html">- Speakears</a></li>
                                                <li><a href="schedule.html">- Schedule</a></li>
                                                <li><a href="tickets.html">- Tickets</a></li>
                                                <li><a href="blog.html">- Blog</a></li>
                                                <li><a href="single-blog.html">- Single Blog</a></li>
                                                <li><a href="contact.html">- Contact</a></li>
                                                <li><a href="#">- Dropdown</a>
                                                    <ul class="dropdown">
                                                        <li><a href="#">- Dropdown Item</a></li>
                                                        <li><a href="#">- Dropdown Item</a></li>
                                                        <li><a href="#">- Dropdown Item</a></li>
                                                        <li><a href="#">- Dropdown Item</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="speakers.html">Speakears</a></li>
                                        <li><a href="blog.html">Blog</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>

                                    {/* <!-- Get Tickets Button --> */}
                                    <a href="#" class="btn confer-btn mt-3 mt-lg-0 ml-3 ml-lg-5">Get Tickets <i class="zmdi zmdi-long-arrow-right"></i></a>
                                </div>
                                {/* <!-- Nav End --> */}
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default NavBar