import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import 'uno.css';
import './assets/style.less';
import '@arco-design/web-react/dist/css/arco.css';
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
