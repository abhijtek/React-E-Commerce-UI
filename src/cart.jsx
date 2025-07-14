import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { remove } from "./store/cartSlice";
const Cart = ()=>{
    
    const dispatch = useDispatch();
    const removeItem = (id)=>{
       dispatch(remove(id));
    }
    const productList = useSelector(state=>state.cart)
      const cards = productList.map(product=>
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
         <Button variant="danger" onClick={()=>{
            removeItem(product.id)
         }}>Remove Item</Button>
      </Card.Footer>
    </Card>
    </div>
      )
    return (
       <>
       
       <div className="row">{
       cards}
       </div>
       </>
    )
}

export default Cart;