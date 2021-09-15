import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from "react-router-dom";
import MessagesContainer from './components/Messages/MessagesContainer';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/profile'> <Profile /></Route>
        <Route path='/messages'><MessagesContainer /></Route>
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
