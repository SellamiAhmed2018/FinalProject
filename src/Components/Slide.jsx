import React from "react";
import {connect} from "react-redux";
import {Link,Route} from "react-router-dom";
import {select} from "../Redux/Actions/actions.js";
import SearchResult from "./SearchResult.jsx";

const Slide = ({selected,select,title,name,list}) => {
	return(
		<div className="Slider">
			<h1 style={{marginLeft:30,marginBottom:30}}>{title}</h1>
			{name=="onlyToShow"&&
			<ul className="listUl">
				{list[name].map((element,key) => {
					return(
						<li className="elementList" key={key}>
							<img alt="" src={element.img} className="deviceImg"/>
							<h3 className="deviceName">{element.name}</h3>
						</li>
					)
				})}
			</ul>}
			{name!="onlyToShow"&&
			<ul className="listUl">
				{list[name].map((element,key) => {
					return(
						<Link to={`/search/${element.name}`} onClick={e=> {
							if(name=="RecentlyAdded"){
								select("RecentlyAdded");
								return;
							}
							select(element.name);
						}} key={key}>
							<li className="elementList">
								<img alt="" src={element.img} className="deviceImg"/>
								<h3 className="deviceName">{element.name}</h3>
							</li>
						</Link>
					)
				})}
				<Route path="/search/:element" component={()=> <SearchResult />}/>
			</ul>}
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		select: (selected) => {dispatch(select(selected))}
	}
}

const mapStateToProps = (state) => {
	return {
		selected: state.selected
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(Slide);