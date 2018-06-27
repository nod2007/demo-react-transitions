// CSS entry point
import './scss/index.css';

// Polyfills
import 'whatwg-fetch'; // fetch
import 'babel-polyfill'; // Map, Set, Assign etc
import 'raf/polyfill'; // requestAnimationFrame

// Below is optional and should be configured for your project

// Vendor
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Modules

import registerServiceWorker from './js/util/registerServiceWorker';
import App from './js/containers/App';


/**
 * Render App component
 */
function AppRoot() {
	return (
		<Router>
			<App />
		</Router>
  	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<AppRoot />, rootElement);

// register service worker to local cache
registerServiceWorker();


