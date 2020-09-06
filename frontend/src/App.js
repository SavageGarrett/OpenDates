import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import NavBar from "./components/widgets/NavBar"
import Footer from "./components/widgets/Footer"
import Index from "./components/pages/Index"
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import Partners from "./components/pages/Partners"
import Vendors from "./components/pages/Vendors"

function App() {
  return(
    <div>
        {/* NavBar and Page Body */}
        <Router>
            <NavBar/>
            <Switch>
                <Route path="/index">
                    <Index/>
                </Route>
                <Route path="/partners">
                    <Partners/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/vendors">
                    <Vendors/>
                </Route>
                <Route path="/contact">
                    <Contact/>
                </Route>
                <Route path="/">
                    <Index/>
                </Route>
            </Switch>
            
            {/* Page Footer */}
            <Footer></Footer>
            
            <script src="js/calendar.js"></script>
            <script src="js/jquery.min.js"></script>
            <script src="js/popper.min.js"></script>
            <script src="js/bootstrap.min.js"></script>
            <script src="js/confer.bundle.js"></script>
            <script src="js/default-assets/active.js"></script><a id="scrollUp" href="#top" style={{position: 'fixed', zIndex: '2147483647', display: 'none'}}><i class="arrow_carrot-up"  i=""></i></a>
        </Router>
    </div>
    );
}

export default App;
