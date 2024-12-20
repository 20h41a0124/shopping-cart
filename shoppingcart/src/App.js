import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from "./Login";
import Products from "./Products";
import Cart from "./Cart";
import { createContext, useState } from "react";

// Create the context
export const UserContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const cartCount = cart.reduce((total, item) => total + item.qty, 0);

  return (
    <UserContext.Provider value={{ cart, setCart }}> {}
      <div className="App">
        <BrowserRouter>
          <div className="App-header">
            <h1>Shopping Cart</h1>
            <div className="links">
             <div> <Link to="/products">Products</Link></div>
              <div><Link to="/login">Login</Link></div>
              <div><Link to="/cart">Cart({cartCount})</Link></div>
            </div>
          </div>
          <div>
            <Routes>
              <Route index element={<Products />} />
              <Route path="products" element={<Products />} />
              <Route path="login" element={<Login />} />
              <Route path="cart" element={<Cart />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
