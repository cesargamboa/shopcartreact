
var axios= require ('axios'); 


axios.get('http://localhost:8088/api/cartitems/')
.then(function(response){
  
  return(response); 
   

})
.catch(function(error){
  console.log(error); 
}); 


const objList={
  items:[{"id":2,"game":"Mass Efect","price":29,"img":"./images/masseffect.jpg"},{"id":1,"game":"\"Resident Evil","price":39,"img":"./images/residentevil.jpg"},{"id":3,"game":"God of War","price":25,"img":"./images/godofwar4.jpg"}],
    count: 0,
    price: 0,
    newCart: [],
    showCart: false
} 
export default objList;




