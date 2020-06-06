import React, { useState } from 'react';
import { Redirect, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GalleriesPage from './pages/GalleriesPage';
import GalleryPage from './pages/GalleryPage';
import Login from './pages/Login';
import Admin from './pages/Admin';
import './App.css';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const login = () => {
    console.log('logging in...')
    setIsAuth(true);
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/about' component={AboutPage} />
          <Route exact path='/galleries' component={GalleriesPage} />
          <Route path='/galleries/:id' component={GalleryPage} />
          <Route path='/admin'>
            {isAuth && <Admin isAuth={isAuth} />}
            {!isAuth && <Redirect to='/login' />}
          </Route>
          <Route path='/login'>
            {!isAuth && <Login isAuth={isAuth} login={login} />}
            {isAuth && <Redirect to='/admin' />}
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
