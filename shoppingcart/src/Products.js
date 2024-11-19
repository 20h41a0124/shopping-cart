import React, { useContext, useState } from "react";
import { UserContext } from "./App"; // Import the context

export default function Products() {
  const item = [
    { name: "Product 1", desc: "This is a natural painting", price: 30, image: <img src="https://cdn.pixabay.com/photo/2023/11/07/06/52/forest-8371211_1280.jpg" className="App-images" alt="Product 1" /> },
    { name: "Product 2", desc: "This is a natural painting", price: 80, image: <img src="https://cdn.pixabay.com/photo/2024/04/03/18/07/fish-8673535_640.jpg" className="App-images" alt="Product 2" /> },
    { name: "Product 3", desc: "This is a natural painting", price: 90, image: <img src="https://cdn.pixabay.com/photo/2024/09/20/14/42/ant-9061666_640.jpg" className="App-images" alt="Product 3" /> },
    { name: "Product 4", desc: "This is a natural painting", price: 50, image: <img src="https://cdn.pixabay.com/photo/2022/10/29/05/11/autumn-7554430_640.jpg" className="App-images" alt="Product 4" /> },
    { name: "Product 5", desc: "This is a natural painting", price: 40, image: <img src="https://cdn.pixabay.com/photo/2023/10/27/20/11/crow-8346196_640.jpg" className="App-images" alt="Product 5" /> },
    { name: "Product 6", desc: "This is a natural painting", price: 50, image: <img src="https://cdn.pixabay.com/photo/2024/08/18/18/02/bee-8978619_640.jpg" className="App-images" alt="Product 6" /> },
    { name: "Product 7", desc: "This is a natural painting", price: 70, image: <img src="https://cdn.pixabay.com/photo/2019/03/02/16/26/man-4030112_640.jpg" className="App-images" alt="Product 7" /> },
    { name: "Product 8", desc: "This is a natural painting", price: 50, image: <img src="https://cdn.pixabay.com/photo/2022/12/01/04/43/girl-7628308_640.jpg" className="App-images" alt="Product 8" /> },
  ];

  const [products, setProducts] = useState(item);
  const { cart, setCart } = useContext(UserContext);

 
  

  const addProduct = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.name === item.name);
      if (existingItem) {
        return prevCart.map((cartItem) => {
          if (cartItem.name === item.name) {
            return { ...cartItem, qty: cartItem.qty + 1 };
          }
          return cartItem;
        });
      } else {
        return [...prevCart, { ...item, qty: 1 }];
      }
    });
  };

  const deleteProduct = (value) => {
    setCart(cart.filter((product) => product.name !== value.name));
  };

  return (
    <div className="App-products">
      
      {products.map((value, index) => (
        <div className="App-item" key={index}>
          {value.image}
          <h3>{value.name}</h3>
          <p>{value.desc}</p>
          <div className="App-cost">
            <h4>{value.price}</h4>
            <button onClick={() => addProduct(value)}>Add</button>
          </div>
        </div>
      ))}
      <hr />
      
    </div>
  );
}
