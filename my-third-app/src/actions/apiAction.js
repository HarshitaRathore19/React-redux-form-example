import axios from 'axios'
const BASE_URL = "https://jsonplaceholder.typicode.com"


 export const getData = (url) => {
   return axios.get(`${BASE_URL}${url}`).catch(error => alert(error))
 }


 export const postData = (url,p) => {
  	return axios.post(`${BASE_URL}${url}`,p)
  	.catch(error => {alert(error)})
 }
