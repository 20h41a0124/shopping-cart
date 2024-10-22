import React from "react";
import { useState } from "react";
export default function Products() {
  const items = [
    { name: "Product 1", desc: "This is a dummy description", price: 30,image:<img src="https://cdn.pixabay.com/photo/2023/11/07/06/52/forest-8371211_1280.jpg" className="App-images"></img> },
    { name: "Product 2", desc: "This is a dummy description", price: 80 ,image:<img src="https://cdn.pixabay.com/photo/2024/04/03/18/07/fish-8673535_640.jpg" className="App-images"></img>},
    { name: "Product 3", desc: "This is a dummy description", price: 90 ,image:<img src="https://cdn.pixabay.com/photo/2024/09/20/14/42/ant-9061666_640.jpg" className="App-images"></img>},
    { name: "Product 4", desc: "This is a dummy description", price: 50 ,image:<img src="https://cdn.pixabay.com/photo/2022/10/29/05/11/autumn-7554430_640.jpg" className="App-images"></img>},
    { name: "Product 5", desc: "This is a dummy description", price: 40 ,image:<img src="https://cdn.pixabay.com/photo/2023/10/27/20/11/crow-8346196_640.jpg" className="App-images"></img>},
    { name: "Product 6", desc: "This is a dummy description", price: 50,image:<img src="https://cdn.pixabay.com/photo/2024/08/18/18/02/bee-8978619_640.jpg" className="App-images"></img>},
    { name: "Product 7", desc: "This is a dummy description", price: 70 ,image:<img src="https://cdn.pixabay.com/photo/2023/10/13/17/10/mushroom-8313142_640.jpg" className="App-images"></img>},
    { name: "Product 8", desc: "This is a dummy description", price: 50 ,image:<img src="https://cdn.pixabay.com/photo/2022/12/01/04/43/girl-7628308_640.jpg" className="App-images"></img>},
  ];
  const [products, setProducts] = useState(items);
  return (
    <div className="App-products">
      {products.map((value, index) => (
        <div className="App-item">
          {value.image}
          <h3>{value.name}</h3>
          <p>{value.desc}</p>
             <div className='App-cost'>
                  <h4>{value.price}</h4>
                  <button>Add</button>
             </div>
        </div>
      ))}
    </div>
  );
}
