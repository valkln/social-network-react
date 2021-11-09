import './App.css';
import { Route } from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import Messages from './components/Messages/Messages';
import Users from './components/Users/Users';
import Login from './components/Login/Login';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect, withRouter } from "react-router";
import { getInit } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { AppStateType } from './redux/redux-store';
type TProps = {
  getInit: () => void
  initialized: boolean
}
class App extends React.Component<TProps> {
  componentDidMount() {
    this.props.getInit()
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    } else return <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route exact path='/'> <Redirect to={'/profile'} /> </Route>
        <Route path='/profile/:userId?'> <ProfileContainer /></Route>
        <Route path='/messages'><Messages /></Route>
        <Route path='/users'> <Users /> </Route>
        <Route path='/login'> <Login /> </Route>
      </div>
    </div>
  }
}
const msp = (state: AppStateType) => ({
  initialized: state.app.initialized
})
export default compose(
  withRouter,
  connect(msp, { getInit })
)(App) as React.ComponentType