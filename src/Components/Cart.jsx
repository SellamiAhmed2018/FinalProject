import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {removeFromCart,hide,increment,decrement,submit} from "../Redux/Actions/actions.js";

const getCount = (list,element) => {
	for(let i=0;i<list.length;i++){
		if(list[i].name==element.name){
			return list[i].count;
		}
	}
	return 0;
}

export const removeSpaces = (text) => {
	let newText = "";
	for(let i=0;i<text.length;i++){
		if(text[i]==' '){
			continue;
		}
		newText+= text[i];
	}
	return newText;
}

export const extractPrice = (price) => {
	let finalPrice = "";
	for(let i=0;i<price.length;i++){
		if(price[i]==' '||price[i]=='€'||price[i]=='$'){
			continue;
		}
		if(price[i]==','){
			finalPrice+='.';
			continue;
		}
		finalPrice+=price[i];
	}
	return finalPrice;
}

const sum = (list) => {
	let somme = 0;
	for(let i=0;i<list.length;i++){
		somme+= parseFloat(extractPrice(list[i].price))*parseFloat(list[i].count);
	}
	somme = somme.toString();
	return somme;
}

const Cart = ({cartItems,removeFromCart,hide,increment,decrement,submited,submit}) => {

	return(
		<div id="theCart">
			<button className="btn btn-secondary" style={{
				backgroundColor:"red",
				fontFamily:"Arial",
				fontSize: 18,
				position: "relative",
				left: "90%"
			}}
			onClick={e=>{
				hide();
			}}
			>X</button>
			<ul className="cartList">
				{cartItems.map((element,key) => {return(
					<li className="cartItem" key={key}>
						<h5>{element.name}</h5>
						<h5 className="cartPrice">
						{`${parseFloat(removeSpaces(element.price))*getCount(cartItems,element)},${element.price.substring(element.price.length-4)}`}
						</h5>
						<button className="btn btn-primary"
						style={{
							position:"relative",
							left: "70%",
							bottom: 20,
							fontSize:20,
							fontFamily:"Arial",
							textAlign: "center",
							backgroundColor: "rgb(100,0,150)"
						}}
						onClick={e=>{
							removeFromCart(key);
						}}
						>x</button>

						<button className="btn btn-primary"
						style={{
							position:"relative",
							left: 30,
							bottom: 10,
							fontSize:20,
							fontFamily:"Arial",
							textAlign: "center",
							backgroundColor: "yellow",
							color: "#000"
						}}
						onClick={e=>{
							console.log(element.count);
							console.log(cartItems);
							increment(key);
						}}
						>&#8593;</button>

						<h5 className="counter">{element.count}</h5>

						<button className="btn btn-primary"
						style={{
							position:"relative",
							left: 50,
							bottom: 10,
							fontSize:20,
							fontFamily:"Arial",
							textAlign: "center",
							backgroundColor: "yellow",
							color: "#000"
						}}
						onClick={e=>{
							decrement(key);
						}}
						>&#8595;</button>

						<img src={element.img} className="cartImg"/>						
					</li>
				)})}
			</ul>


			{cartItems.length>0&&
				<React.Fragment>
					<hr />
					<h1 className="total">Total : {sum(cartItems)} €</h1>
					<button className="btn btn-primary" style={{
						backgroundColor: "#2fcc8b",
						position: "relative",
						left: "36%",
						marginTop: 30,
						fontSize: 23,
						fontFamily: "Arial",
						width: 100,
						height: 50,
						textAlign: "center"
					}}
					onClick={e=>{
						submit();
					}}
					>Submit</button>
					{submited&&
					<Redirect to="/"/>}
				</React.Fragment>
			}
		</div>
	);

}

const mapDispatchToProps = (dispatch) => {
	return {
		removeFromCart : (x) => {dispatch(removeFromCart(x))},
		hide : () => {dispatch(hide())},
		increment: (x) => {dispatch(increment(x))},
		decrement: (x) => {dispatch(decrement(x))},
		submit: () => {dispatch(submit())}
	}
}

const mapStateToProps = (state) => {
	return {
		cartItems:state.cartItems,
		submited:state.submited
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(Cart);