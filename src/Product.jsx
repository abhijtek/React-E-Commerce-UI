import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from "react-redux";
import { add } from "./store/cartSlice";
import { getProducts } from "./store/productSlice";

export const Product = () =>{

   const dispatch = useDispatch(); // returns a method or funciton which can be used to read action and give it to state

   /// to read from staet we use useSelector hoook
   const {data : products,status} = useSelector( state => state.products );
  useEffect(()=>{
   // fetch('https://fakestoreapi.com/products')
   // .then(response => response.json())
   // .then(result => getProducts(result))

   // 
   dispatch(getProducts());
    

  },[]); // render once in start 
  if( status === "loading"){
   return <p>loading....</p>
  }
  if( status === "error"){
    return <p> something wrong.....</p>
  }
  const addToCart = (product)=>{
 // dispatch add action
  dispatch(add(product))
  }
  const cards = products.map(product=>
   <div key  = {product.id} className = "col-md-3" style = {
      {
         marginBottom : "10px",
      }
   }> 
       <Card key = {product.id} style={{ width: '18rem' }} className="h-100" >
       <div className="text-center">  
      <Card.Img variant="top" src= {product.image} style={{
         height : "36vh", width : "32vh"
      }}/>
      </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          INR: {product.price}
        </Card.Text>
        
      </Card.Body>
      <Card.Footer style = {
         { background: "white", }
      }>
         <Button variant="primary" onClick = {() => addToCart(product)}>Add to Cart</Button>
      </Card.Footer>
    </Card>
    </div>
  )
 return  (
    <>
    <h1>Product Dahsboard</h1>
    <div className="row">
      {cards}
    </div>
    </>
 )
}

export default Product