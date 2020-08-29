import React,{useRef} from "react";
import {Link,Route} from "react-router-dom";
import {connect} from "react-redux";
import {add,clear} from "../Redux/Actions/actions.js";
import Slide from "./Slide.jsx";
import ShoppingList from "../ShoppingList.json";

const Content = ({shopname,add,clear,submited,cartItems}) => {
	const inpRef = useRef(null);

	return(
		<div className="wrapper">
			<input className="form-control" id="productInput" placeholder="Search For Product" ref={inpRef} onChange={e=>{
				add(e.target.value);
			}}/>
			<button className="btn btn-primary" onClick={e=>{
				clear();
				inpRef.current.value = "";
			}}>Clear</button>
			
			<Slide title="Devices :" name="devices" list={ShoppingList}/>
			<Slide title="Recently Added :" name="RecentlyAdded" list={ShoppingList}/>
			{submited&&
			<Slide title="Bought Elements : " name="onlyToShow" list={{onlyToShow:cartItems}}/>}
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		add: (string) => {dispatch(add(string))},
		clear: () => {dispatch(clear())}
	}
}

const mapStateToProps = (state) => {
	return {
		shopname:state.shopname,
		submited:state.submited,
		cartItems:state.cartItems
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(Content);