
export const Inc = "Increment_Num"
export const Dec = "Decrement_Num"


const initState ={
  result: 0
}

export default (state = initState, action = {}) => {

	if(action.type === Inc)
	{
		console.log(state.result +1)
		return {result: state.result +1}
	}
	else if(action.type === Dec)
	{
		console.log(state.result -1)
		return {result: state.result -1}
	}
	else
	{
		return {result: state.result}
	}

  
}












// switch (action.type) {
//   	case Inc:
//   		debugger
//   		return {...state, result:  action.payload.response+1}
//   	 	break;
  	
//   	case Dec:
//   		return {...state, result: action.payload.response-1}
//   		break;
    
//     default:
//     	return state;
//     	break;
// 	}