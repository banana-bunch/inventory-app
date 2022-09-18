import React from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import { BrowserRouter } from 'react-router-dom';

import {App} from './components/App';

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
)