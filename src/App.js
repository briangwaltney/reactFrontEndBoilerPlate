import React from 'react';
import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";
import ScrollToTop from 'react-router-scroll-top';

import ProtectedRoute from './components/common/protectedRoute'

import NavBar from "./components/navBar";
import Home from './components/home'
import Footer from './components/footer'




function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <NavBar />
        <main>
          <Switch>
            <ProtectedRoute path="" component={Home} />
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
