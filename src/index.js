import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';
import registerServiceWorker from './js/registerServiceWorker';

import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css';
    
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
