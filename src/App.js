import React, { Component } from 'react';
import Navigation from './navigation/navigation';
import Header from './header/header';
import Description from './description/description';
import Projects from './projects/projects';
import Experience from './experience/experience';
import Education from './education/education';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <Description />
        <Projects />
        <Experience />
        <Education />
      </div>
    );
  }
}

export default App;
