export const VP = "VIEW_POST"

 const initState = {
 	result: [],
  all_data: []
 }

export default (state = initState, action = {}) => { 
	//debugger
    switch(action.type)
	{ 
      case VP:{
        let allData = state.all_data.concat(action.payload.response)
        debugger
        console.log(allData)
        return {...state,all_data: allData,result: action.payload.response}
        break;
      }
      default:
      return {...state}
      break;
    }
   
}

