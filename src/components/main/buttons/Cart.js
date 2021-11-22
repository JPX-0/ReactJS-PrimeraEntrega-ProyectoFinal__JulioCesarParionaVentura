import {AiOutlineShoppingCart} from "react-icons/ai";

let item = 0;

const Cart = () => {
  return (
    <li className="header__list">
      <button className="btn btn__shop">
        <i className="btn__shop-icon"><AiOutlineShoppingCart /></i>
        <span className="btn__shop-indicator">{item}</span>
      </button>
    </li>
  )};
export default Cart;