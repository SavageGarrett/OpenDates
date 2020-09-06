import React from 'react'
import {Link, Switch} from "react-router-dom"

function NavBar() {
    return (
        <header class="header-area">
            <div class="classy-nav-container breakpoint-off">
                <div class="container">
                    <nav class="classy-navbar justify-content-between" id="conferNav">

                        <a class="nav-brand" href="./index.html"><img src="./img/core-img/logo.png" alt=""/></a>

                        <div class="classy-navbar-toggler">
                            <span class="navbarToggler"><span></span><span></span><span></span></span>
                        </div>

                        <div class="classy-menu">
                            <div class="classycloseIcon">
                                <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                            </div>
                            <div class="classynav">
                                <ul id="nav">
                                    <li>
                                        <Switch>
                                            <Link to="/index">Home</Link>
                                        </Switch>
                                    </li>
                                    <li>
                                        <Switch>
                                            <Link to="/partners">Our Partners</Link>
                                        </Switch>
                                    </li>
                                    <li>
                                        <Switch>
                                            <Link to="/about">About</Link>
                                        </Switch>
                                    </li>
                                    <li>
                                        <Switch>
                                            <Link to="/vendors">For Vendors</Link>
                                        </Switch>
                                    </li>
                                    <li>
                                        <Switch>
                                            <Link to="/contact">Contact</Link>
                                        </Switch>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default NavBar