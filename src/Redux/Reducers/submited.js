const submited = (state=false,action) => {
	if(action.type=="SUBMITED"){
		return true;
	}
	return state;
}

export default submited;