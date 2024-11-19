import { UserContext } from "./App9"; // Change this import
import { useContext } from "react";

export default function Child2() {
  const { name, setName, cart } = useContext(UserContext);
  
  return (
    <>
      <h2>Hello {name} from Child2 component</h2>
      {cart.map((value, index) => (
        <div key={index}>{value.name}-{value.price}-{value.qty}</div>
      ))}
    </>
  );
}
