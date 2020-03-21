import axios from 'axios'


// export function viewPost(){
// 	return function(dispatch){
// 		dispatch(showPost())
// 	}
// }

// export function showPost(){ 
//  	axios.get('https://jsonplaceholder.typicode.com/posts')
// 	.then(res=>{res.data})
	
//      return {
// 		type: "VIEW_POST",
//         payload: res.data
//     }
// }


export function viewPosts() {
   return function(dispatch) {
     return axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(({ data }) => {
         dispatch(showPost(data));
     });
   };  
}

export function showPost(response){ 
       debugger
       console.log(response)
	     return {
		type: "VIEW_POST",
        payload: response
    }
}


