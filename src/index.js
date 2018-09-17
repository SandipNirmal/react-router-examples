import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import App from './NestedRoutes';
// import App from './RouteVsSwitch';
// import App from './UsingExact';
// import App from './RouteParams';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
