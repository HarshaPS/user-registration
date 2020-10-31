import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Login from './Login';
import Register from './Register';
import Cities from './Cities';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Switch>
						<Route exact path="/register" component={Register} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/cities" component={Cities} />
						<Redirect from="/" to="login" />
					</Switch>
				</div>
			</Router>
		);
	}
}
export default App;
