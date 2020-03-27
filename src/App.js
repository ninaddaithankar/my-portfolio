import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Intro} />
					<Route exact path='/about' component={About} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
