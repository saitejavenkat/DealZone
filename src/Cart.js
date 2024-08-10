import Header from "./Header";
import { useContext, useReducer } from "react";
import { cart_data } from "./context_api/cart_data_handle";
import { useState, useEffect } from "react";
import logo from "./logo.png";
import NoProducts from "./no_products";
import "./cart.css";

function Cart() {
  const { cart_datas, set_data, count, set_count, like_data, set_like } =
    useContext(cart_data);
  const [response, set_reponse] = useState(false);
  const [options, set_option] = useState(true);
  const [data, set_d] = useState(cart_datas);
  
  useEffect(() => {
    options ? set_data(data) : set_like(data);
  }, [data]);
  return (
    <>
      <Header />
      <div className="cart-container">
        <div className="cart-nav">
          <div
            onClick={() => {
              set_option(true);
              set_d(cart_datas);
            }}
          >
            Orders
          </div>
          <div
            onClick={() => {
              set_d(like_data);
              set_option(!options);
            }}
          >
            Wish List
          </div>
        </div>
        <div className="cart-details">
          {data.map((i) => {
            return (
              <div key={i.title} className="cart-products">
                <img src={i.img_url} alt={i.img_alt} />
                <div className="purchase-details">
                  <span className="name">
                    Product Name: <b>{i.name}</b>
                  </span>
                  <span className="type">
                    Type: <b>{i.type}</b>
                  </span>
                  <span className="price">
                    Price: ₹ <b>{parseInt(((i.price).split(",")).join(""))}*{i.unique_count}=

                    {parseInt(((i.price).split(",")).join(""))*i.unique_count}
                    </b>
                  </span>
                  {options&&(
                  <span className="unique-items">
                    Items: 
                    <b> &nbsp;
                    <button onClick={(e)=>{
                      if(i.unique_count>1){
                      i["unique_count"]-=1;
                      set_data([...cart_datas,i])}
                    }}>-</button>
                    <input type="text" disabled={true} value={i.unique_count}></input>
                    <button  onClick={(e)=>{
                      i["unique_count"]+=1;
                      set_data([...cart_datas,i])
                    }}>+</button>
                    </b>
                  </span>)
          }
                  <span className="initial-cost">
                    Cost: ₹{" "}
                    <b>
                      <del>
                      {parseInt(((i.initial_price).split(",")).join(""))}*{i.unique_count}=
                        {parseInt(((i.initial_price).split(",")).join(""))*i.unique_count}</del>{" "}
                    </b>
                  </span>
                  <button
                    className="close-cart"
                    value={i.name}
                    onClick={(e) => {
                      const dt = data.filter(
                        (item) => item.name !== e.target.value
                      );
                      set_d(dt);
                      options ? set_count(count - 1) : set_count(count);
                    }}
                  >
                    X
                  </button>
                </div>
              </div>
            );
          })}
          {data.length === 0 && !options ? <NoProducts err={"Liked"} /> : ""}
          {data.length === 0 && options ? <NoProducts err={"Cart"} /> : ""}
          {
            options&&(
              <>
              <div className="total"></div>
              </>
            )
          }
          {response && (
            <span className="state ">
              Deleted
              <span className="material-symbols-outlined">shopping_bag</span>
            </span>
          )}
        </div>
      </div>
    </>
  );
}
export default Cart;
