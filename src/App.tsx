import './App.css';
import { Route } from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import Users from './components/Users/Users';
import Login from './components/Login/Login';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, withRouter } from "react-router";
import { getInit } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { getInitState } from './redux/app-selectors';

export const App = () => {
  const dispatch = useDispatch()
  const initialized = useSelector(getInitState)
  useEffect(() => {
    dispatch(getInit())
  }, [])
  if (!initialized) {
    return <Preloader />
  } else return <div className="app-wrapper">
    <Header />
    <Navbar />
    <div className='app-wrapper-content'>
      <Route exact path='/'> <Redirect to={'/profile'} /> </Route>
      <Route path='/profile/:userId?'> <Profile /></Route>
      <Route path='/messages'><Messages /></Route>
      <Route path='/users'> <Users /> </Route>
      <Route path='/login'> <Login /> </Route>
    </div>
  </div>
}

export default withRouter(App)