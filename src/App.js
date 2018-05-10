import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/home'

const App = () => {
  return (
    <div className="content">
      <Header />
      <Router>
      <div>
      <Route exact path='/' component={Home} />
            </div>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
