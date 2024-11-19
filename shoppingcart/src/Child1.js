import { UserContext } from "./App9";
import { useContext } from "react";

export default function Child1() {
  const { cart } = useContext(UserContext);


  const increasequantity=(item)=>{
    setCart((cartitem) =>{
      return{...cartItem,qty:cartitem.qty+1}
    })
  

  return (
    <>
      <h2>My Cart</h2>
      {cart.map((value, index) => (
        <div key={index}>{value.name}-{value.price}-<button>-</button>{value.qty}<button onClick={increasequantity}>+</button></div>
      ))}
    </>
  );
  }}
