import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import NavBar from "./components/widgets/NavBar"
import Footer from "./components/widgets/Footer"
import Index from "./components/pages/Index"
import About from "./components/pages/About"
import Schedule from "./components/pages/Schedule"
import Contact from "./components/pages/Contact"

function App() {
  return(
    <div>
        {/* NavBar and Page Body */}
        <Router>
          <NavBar/>
          <Switch>
              <Route path="/index" component={Index}>
                  <Index/>
              </Route>
              <Route path="/about" component={About}>
                  <About/>
              </Route>
              <Route path="/schedule" component={Schedule}>
                  <Schedule />
              </Route>
              <Route path="/contact" component={Contact}>
                  <Contact/>
              </Route>
          </Switch>
        </Router>

        {/* Page Footer */}
        <Footer></Footer>

        <script src="js/jquery.min.js"></script>
        <script src="js/popper.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/confer.bundle.js"></script>
        <script src="js/default-assets/active.js"></script><a id="scrollUp" href="#top" style={{position: 'fixed', zIndex: '2147483647', display: 'none'}}><i class="arrow_carrot-up"  i=""></i></a>
    </div>
    );
}

export default App;
