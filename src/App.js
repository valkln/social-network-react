import './App.css';
import { Route } from "react-router-dom";
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';

import ProfileContainer from './components/Profile/ProfileContainer';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect, withRouter } from "react-router";
import { getInit } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.getInit()
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    } else return <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route exact path='/'> <Redirect to={'/profile'} /> </Route>
        <Route path='/profile/:userId?'> <ProfileContainer /></Route>
        <Route path='/messages'><MessagesContainer /></Route>
        <Route path='/users'> <UsersContainer /> </Route>
        <Route path='/settings'> <Settings /> </Route>
        <Route path='/login'> <Login /> </Route>
      </div>
    </div>
  }
}
const msp = (state) => ({
  initialized: state.app.initialized
})
export default compose(
  withRouter,
  connect(msp, { getInit })
)(App);
