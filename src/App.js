import React from 'react';
import Header from "./Components/Header.jsx";
import Content from "./Components/Content.jsx";
import SearchResult from "./Components/SearchResult";
import {BrowserRouter,Route} from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {

	return(
		<BrowserRouter>
			<Header />
			<Route path="/" exact={true} component={Content}/>
			<Route path="/search" component={SearchResult}/>
		</BrowserRouter>
	)

}


export default App;
