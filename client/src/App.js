import React from "react";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<Router>
			<Nav />
			<Switch>
				<Route exact path="/" component={Search} />
				<Route exact path="/search" component={Search} />
				<Route path="*" component={NoMatch} />
			</Switch>
		</Router>
	);
}

export default App;
