import './App.css';
import { Route } from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

import ProfileContainer from './components/Profile/ProfileContainer';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';

import Settings from './components/Settings/Settings';



function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/profile'> <ProfileContainer /></Route>
        <Route path='/messages'><MessagesContainer /></Route>
        <Route path='/users'> <UsersContainer /> </Route>
        <Route path='/settings' component={Settings} />
      </div>
    </div>
  );
}

export default App;
