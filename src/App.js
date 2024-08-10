import "./App.css";
import Header from "./Header";
import Categories from "./Categories";
import Products from "./products";
import Cart from "./Cart";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { cart_data } from "./context_api/cart_data_handle";
import Profile from "./Profile";
import { useEffect, useState } from "react";
function App() {
  const [count, set_count] = useState(0);
  const [cart_datas, set_data] = useState([]);
  const [like_data, set_like] = useState([]);
  return (
    <>
      <cart_data.Provider
        value={{ count, set_count, cart_datas, set_data, like_data, set_like}}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Header />}></Route>
            <Route path="/Categories" element={<Categories />}></Route>
            <Route
              path="/Categories/mens-topwear"
              element={<Products unique="Mens-TopWear" loc={0} />}
            ></Route>
            <Route
              path="/Categories/mens-bottomwear"
              element={<Products unique="Mens-BottomWear" loc={1} />}
            ></Route>
            <Route
              path="/Categories/watches"
              element={<Products unique="Watches" loc={2} />}
            ></Route>
            <Route
              path="/Categories/footwear"
              element={<Products unique="FootWear" loc={3} />}
            ></Route>
            
            <Route
              path="/Categories/saree"
              element={<Products unique="Sarees" loc={4} />}
            ></Route>
            <Route
              path="/Categories/women-sleepwear"
              element={<Products unique="Womens-SleepWear" loc={7} />}
            ></Route>
            <Route path="/Cart" element={<Cart />}></Route>
            <Route path="/Profile" element={<Profile />}></Route>
          </Routes>
        </Router>
      </cart_data.Provider>
    </>
  );
}

export default App;
