const shopname = (state="",action) => {
	switch(action.type){
		case "ADD": return action.payload;
		case "CLEAR": return "";
		default: return state;
	}
}

export default shopname