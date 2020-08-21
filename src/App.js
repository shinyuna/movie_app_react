import React from 'react';
import Home from './router/Home';
import About from './router/About';
import Detail from './router/Detail';
import Navigation from './components/Navigation'
import './App.css';

import { HashRouter, Route } from 'react-router-dom';

function App() {
  return <HashRouter>
  <Navigation />
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" exact={true} component={About} />
    <Route path="/movie/:id" exact={true} component={Detail} />
  </HashRouter>
}

export default App;