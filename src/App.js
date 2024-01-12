import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Switch>
					<Route exact path='/my-portfolio' component={Intro} />
					<Route exact path='/my-portfolio/about' component={About} />
					<Route exact path='/my-portfolio/work' component={Work} />
					<Route exact path='/my-portfolio/contact' component={Contact} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
