import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import store from './redux/state.js'

let renderAllTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App state={state}

					addPost={store.addPost.bind(store)}
					updateNewPostText={store.updateNewPostText.bind(store)}

					addMessage={store.addMessage.bind(store)}
					updateNewMessageText={store.updateNewMessageText.bind(store)}
				/>
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById('root')
	);
}
renderAllTree(store.getState());
store.subscribe(renderAllTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
