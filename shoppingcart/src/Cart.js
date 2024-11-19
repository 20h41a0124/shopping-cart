import { useContext,useState} from "react";
import { UserContext } from "./App"; 
import {  useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart,setCart } = useContext(UserContext); 
 const Navigate=useNavigate()


 const GoHome=()=>{
  Navigate('/products')
 }
 const deleteProduct = (value) => {
  setCart(cart.filter((product) => product.name !== value.name));
};
  
 const incrementQuantity = (product) => {
  product.qty += 1;

  setCart(
    cart.map((item) => {
      if (item.name === product.name) {
        return product;
      }
      return item;
    })
  );
};

const decrementQuantity = (product) => {
  if (product.qty === 1) {
    setCart(cart.filter((item) => item.name !== product.name));
  } else {
    product.qty -= 1;

    setCart(
      cart.map((item) => {
        if (item.name === product.name) {
          return product;
        }
        return item;
      })
    );
  }
};

  return (
    <div>
      <ul>
        {cart.map((value, index) => (
          <div key={index}>
            <li>
              {value.name} - {value.desc} - {value.price} - {value.qty} - 
              <button onClick={()=>decrementQuantity(value)}>-</button>
              {value.qty}
              <button onClick={()=>incrementQuantity(value)}>+</button>
              Total: {value.price * value.qty}
              <button onClick={() => deleteProduct(value)}>Delete</button> - 
<hr></hr>
            </li>
          </div>
        ))}
      </ul>
      <button onClick={GoHome}>Go to Home</button>
    </div>
  );
}
