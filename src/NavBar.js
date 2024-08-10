import { Link } from "react-router-dom";
import { useContext } from "react";
function handle(e) {}

function remove(e) {}

function NavBar({ cart }) {
  return (
    <>
      <nav>
        <div
          className="categories"
          onPointerMoveCapture={handle}
          id="cate"
          onPointerOutCapture={remove}
        >
          <img src="https://cdn-icons-png.flaticon.com/128/4250/4250099.png" />
          <span className="hel">Categories</span>
          <Link to={"/Categories"}></Link>
        </div>
        <div className="cart" onPointerMove={(e) => {}}>
          <img src="https://cdn-icons-png.flaticon.com/128/2543/2543369.png" />
          {cart > 0 && <sup>{cart}</sup>}
          <span>Cart</span>

          <Link to={"/Cart"}></Link>
        </div>
        <div className="sign-login" onPointerMove={(e) => {}}>
          <img src="https://cdn-icons-png.flaticon.com/128/9308/9308008.png" />
          <span>Profile</span>
          <Link to={"/Profile"}></Link>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
