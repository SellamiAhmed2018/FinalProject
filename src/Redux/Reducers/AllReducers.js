import {combineReducers} from "redux";
import shopname from "./shopname";
import selected from "./selected";
import cartItems from "./cartItems";
import showCart from "./showCart";
import submited from "./submited";

const AllReducers = combineReducers({
	shopname,selected,cartItems,showCart,submited
})

export default AllReducers;
