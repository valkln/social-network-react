import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from './App';

let renderAllTree = (props) => {
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App state={props.state} />
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById('root')
	);
}

export default renderAllTree;