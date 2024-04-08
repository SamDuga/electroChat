import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

ReactDOM.createRoot(document.getElementById('chatApp')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
