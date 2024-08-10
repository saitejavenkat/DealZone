import Header from "./Header";
import "./Categories.css";
import { Link } from "react-router-dom";
import data from "./Category_Data";
import { useState } from "react";
function Categories() {
  return (
    <>
      <Header />
      <div className="Name">Categories</div>
      <div className="products">
        {data.map((i) => {
          return (
            <div key={i.title}>
              <span>{i.title}</span>
              <span>
                <sup style={{ fontSize: "12px", color: "green" }}>off</sup>{" "}
                {i.offer} Deal Now
              </span>
              <img src={i.img_url} alt={i.description} />
              <Link to={`/Categories/${i.url}`} />
            </div>
          );
        })}
      </div>
    </> 
  );
}
export default Categories;
