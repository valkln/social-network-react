import './App.css';
import { Route } from "react-router-dom";
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';

import ProfileContainer from './components/Profile/ProfileContainer';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';

import Settings from './components/Settings/Settings';
import Login from './components/Login/Login';

function App(props) {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/profile/:userId?'> <ProfileContainer /></Route>
        <Route path='/messages'><MessagesContainer /></Route>
        <Route path='/users'> <UsersContainer /> </Route>
        <Route path='/settings' component={Settings} />
        <Route path='/login'> <Login /> </Route>
      </div>
    </div>
  );
}

export default App;
