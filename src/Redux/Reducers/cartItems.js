const cartItems = (state=[],action) => {
	switch(action.type){
		case"ADDTOCART": return [...state,action.toAdd];
		
		case"REMOVEFROMCART":
			return state.filter(item => item.name!=state[action.toRemove].name);

		
		case"INCREMENT": {
			for(let i=0;i<state.length;i++){
				if(i==action.place){
					state[i].count++;
				}
			}
			return [...state];
		}
		
		case"DECREMENT": {
			for(let i=0;i<state.length;i++){
				if(i==action.place){
					if(state[i].count==1){
						return state;
					}
					state[i].count--;
				}
			}
			return [...state];
		}
		default: return state;
	}
}

export default cartItems;