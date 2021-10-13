import React from 'react';
import './App.css';
import Navbar from './AllComponents/NavbarComponent/Navbar';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './AllComponents/Components/Home';
import Skills from './AllComponents/Components/Skills';
import Education from './AllComponents/Components/Education';
import Experience from './AllComponents/Components/Experience';
import Projects from './AllComponents/Components/Projects';
import Publications from './AllComponents/Components/Publications';

function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/skills' exact component={Skills} />
          <Route path='/education' component={Education} />
          <Route path='/experience' exact component={Experience} />
          <Route path='/projects' exact component={Projects} />
          <Route path='/publications' exact component={Publications} />
        </Switch>
      </Router>
      </>
  );
}

export default App;
