export function formSubmit(data){
	return function(dispatch){
		dispatch(printSuccess(data))
	}
}

export function printSuccess(response){
	return {
      type: "Form_Data",
      payload: {
      	response 
      }
           }
}



