import React,{useState} from "react";
import {connect} from "react-redux";
import {addToCart,removeFromCart,show,hide} from "../Redux/Actions/actions.js";
import Cart from "./Cart.jsx";
import {extractPrice} from "./Cart.jsx";
import ShoppingList from "../ShoppingList.json";

const checkItem = (item,list) => {
	for(let i=0;i<list.length;i++){
		if(list[i].name==item.name){
			return true;
		}
	}
	return false;
}

const validPrice = (price) => !isNaN(price)&&price

const SearchResult = ({match,selected,cartItems,addToCart,removeFromCart,showCart,show,hide}) =>{
	const [result,setResult] = useState([...ShoppingList[selected]]) 
	const [low,setLow] = useState("");
	const [high,setHigh] = useState("");

	return(
		<div className="wrapper">
			<div className="divFilter">
				<h3 className="filter">Price : </h3>
				<input className="form-control" style={{width:100,display:"inline-block",fontFamily: "Arial",fontSize: 20}}
				onChange={e=>{
					setLow(e.target.value);
					setResult(result => [...ShoppingList[selected]]);
				}}/>
				<h3 className="filter"> to </h3>
				<input className="form-control" style={{width:100,display:"inline-block",fontFamily: "Arial",fontSize: 20}}
				onChange={e=>{
					setHigh(e.target.value);
					setResult(result => [...ShoppingList[selected]]);
				}}/>
				<button className="btn btn-secondary" style={{
					backgroundColor: "purple",
					marginBottom: 10,
					marginLeft: 20,
					textAlign: "center",
					fontSize: 20,
					fontFamily: "Arial"
				}}
				onClick={e=>{
					if(validPrice(low)&&validPrice(high)){
						if(parseInt(low)>parseInt(high)){
							let temp = low;
							setLow(high);
							setHigh(temp);
						}
						setResult(result=> result.filter(element => parseInt(low)<=extractPrice(element.price)&&parseInt(high)>=extractPrice(element.price)));
					}

				}}
				>Filter</button>
			</div>
			{selected&&
			<ul className="productList">
			{result.map((element,key) => {return(
				<li className="productItem" key={key}>
					<h2>{element.name}</h2>
					<br />
					<h2 className="productPrice">{element.price}</h2>
					<button className="btn btn-primary" style={{
						position: "relative",
						left: "40%",
						top: "40px",
						width: "200px",
						height: "50px",
						fontSize: 25,
						fontFamily: "Arial",
						fontWeight: "bolder"
					}}
					onClick={e=>{
						show();
						if(checkItem(element,cartItems))
							return;
						addToCart({name:element.name,price:element.price,img:element.img,count:1});
					}}
					>Add To Cart</button>
					<br />
					<img alt="" src={element.img} className="productImg"/>
					<br />
				</li>
				)})}
			</ul>
			}
			{showCart&&<Cart />}
		</div>
	)

}

const mapDispatchToProps = (dispatch) => {
	return {
		addToCart : (x) => {dispatch(addToCart(x))},
		removeFromCart : (x) => {dispatch(removeFromCart(x))},
		show : () => {dispatch(show())},
		hide : () => {dispatch(hide())}
	}
}

const mapStateToProps = (state) => {
	return {
		selected:state.selected,
		cartItems:state.cartItems,
		showCart:state.showCart,
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(SearchResult);