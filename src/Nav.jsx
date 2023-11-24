// App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home'; // Create Home.js and other components similarly
import About from './About';
import Committee from './Committee';
import Events from './Events';
import Membership from './Membership';
import Chencon from './Chencon';
import Newsletter from './Newsletter';
import Contact from './Contact';

const navItems = ["Home", "About", "Committee", "Events", "Membership", "Chencon", "Newsletter", "Contact"];
const paths = ["/", "/about", "/ExecutiveCommittee", "/Events", "/Membership", "/Chencon", "/Chenlink Newsletter", "/Contact"];

const generateRoutes = () => {
  return navItems.map((item, index) => (
    <Route key={index} path={paths[index]} exact component={componentMap[item]} />
  ));
};

const componentMap = {
  "Home": Home,
  "About": About,
  "Committee": Committee,
  "Events": Events,
  "Membership": Membership,
  "Chencon": Chencon,
  "Newsletter": Newsletter,
  "Contact": Contact
};

const App = () => (
  <Router>
    <div>
      <Navbar navItems={navItems} />

      {generateRoutes()}
    </div>
  </Router>
);

export default App;
