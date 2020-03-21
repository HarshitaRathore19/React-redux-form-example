export const FD = "Form_Data"

 const initState = {
 	result: [],
  all_data: []
 }

export default (state = initState, action = {}) => { 
	//debugger
    switch(action.type)
	{ 
      case FD:{
        let all_data = state.all_data.concat(action.payload.response)
        return {...state,all_data: all_data, result: action.payload.response}
        break;
      }
      return {...state, result: action.payload.response}
      break;
      default:
      return {...state}
      break;
    }
   
}



















// switch (action.type){
// 		 case FD:
// 		{
// 			console.log(action.payload.response)
// 		return {result: action.payload.response}
// 	    }
// 	    default:
// 	    {
// 	      console.log('Else running')
// 	    return state
// 	    }
//     }  