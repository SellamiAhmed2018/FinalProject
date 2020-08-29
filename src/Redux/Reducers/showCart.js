const showCart = (state=false,action) => {
	if(action.type=="SHOW"){
		return true;
	}
	else if(action.type=="HIDE"){
		return false;
	}
	else{
		return state;
	}
}

export default showCart;