import "./Heading.css";
import logo from "./logo.png";
import NavBar from "./NavBar";
import { useState } from "react";
import Fetch_data from "./Fetch_Data";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { cart_data } from "./context_api/cart_data_handle";
function Header({ cart_count }) {
  const [loc, set_loc] = useState({});
  const { count } = useContext(cart_data);
  //
  //window.onload=()=>{
  //Fetch_data().then((data)=>{
  //set_loc(data)
  // })

  // }
  
  return (
    <>
      <div className="header">
        <div className="heading">
          <div className="logo-side">
            <Link to={"/"}>
              <img src={logo} />
            </Link>
            <header>DealZone</header>
            {loc?.name && (
              <span className="city-location">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1383/1383676.png"
                  style={{ width: "20px", height: "20px" }}
                />
                &nbsp; &nbsp; &nbsp;{loc?.name}
              </span>
            )}
          </div>
          <form>
            <input
              type="search"
              title="Universal Search"
              placeholder="Search the products"
            />
          </form>
          <NavBar cart={count} />
        </div>
      </div>
    </>
  );
}
export default Header;
