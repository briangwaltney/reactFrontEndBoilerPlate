import React from 'react';
import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";
import ScrollToTop from 'react-router-scroll-top';

import ProtectedRoute from './components/common/protectedRoute'

import NavBar from "./components/navBar";
import Home from './components/home'
import Footer from './components/footer'
import Portfolio from './components/portfolioPage/portfolio'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <NavBar />
        <main className='container'>
          <Switch>
            <ProtectedRoute path="/protected" component={Home} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/' exact component={Home} />

            <Redirect to="/not-found" />
          </Switch>
        </main>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
