  export function increment(){
	return function(dispatch){
		dispatch(printInc())
	}
}

export function printInc(){
	return {
      type: "Increment_Num"
      }
  }




export function decrement(){
	return function(dispatch){
		dispatch(printDec())
	}
}



export function printDec(){
	return {
      type: "Decrement_Num"    
  }
}


