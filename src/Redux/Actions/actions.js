export const add = (string) => (dispatch,getState) => {
	dispatch({type:"ADD",payload:string});
}

export const clear = () => (dispatch,getState) => {
	dispatch({type:"CLEAR",payload:""});
}

export const select = (selected) => (dispatch,getState) => {
	dispatch({type:"SELECT",payload:selected});
}

export const addToCart = (x) => (dispatch,getState) => {
	dispatch({type:"ADDTOCART",toAdd:x});
}

export const removeFromCart = (x) => (dispatch,getState) => {
	dispatch({type:"REMOVEFROMCART",toRemove:x});
}

export const show = () => (dispatch,getState) => {
	dispatch({type:"SHOW"});
}

export const hide = () => (dispatch,getState) => {
	dispatch({type:"HIDE"});
}

export const increment = (index) => (dispatch,getState) => {
	dispatch({type:"INCREMENT",place:index});
}

export const decrement = (index) => (dispatch,getState) => {
	dispatch({type:"DECREMENT",place:index});
}

export const submit = () => (dispatch,getState) => {
	dispatch({type:"SUBMITED"});
}