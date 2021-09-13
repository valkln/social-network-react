import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from "react-router-dom";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/profile'>
          <Profile
            state={props.state.profile}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText} /></Route>
        <Route path='/messages'>
          <Messages
            state={props.state.messages}
            addMessage={props.addMessage}
            updateNewMessageText={props.updateNewMessageText}
          />
        </Route>
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
