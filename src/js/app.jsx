import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import configStore from './store';

import Navbar from './components/navbar';
import Home from './views/home';
import Settings from './views/settings';
import Welcome from './views/welcome';
import Chat from './views/chat';
import { listenToAuthChange } from './actions/authActions';

const store = configStore();

function App() {
	useEffect(() => {
		store.dispatch(listenToAuthChange());
	}, []);

	return (
		<React.StrictMode>
			<Provider store={store}>
				<Router>
					<Navbar />
					<div className='content-wrapper'>
						<Routes>
							<Route path='/chat/:id' element={<Chat />} />
							<Route path='/settings' element={<Settings />} />
							<Route path='/home' element={<Home />} />
							<Route path='/' element={<Welcome />} />
						</Routes>
					</div>
				</Router>
			</Provider>
		</React.StrictMode>
	);
}

export default App;
