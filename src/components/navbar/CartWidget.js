import { Link } from "react-router-dom";
import imgLogo from "../../assets/logo.jpg";

let title = "Pasteleria Yuumy";

const CartWidget = (props) => {
  return (
    <>
      {
        props.title === "LOGO" ?
        <Link to="/" className="header__logo rfsh">
          <img src={imgLogo} alt={title} className="header__logo-img"></img>
          <span className="header__logo-text">{title}</span>
        </Link> : 
        <li className="header__list">
          {
            props.title === "Inicio" ?
            <Link to="/" className="header__title rfsh">{props.title}</Link> :
            props.type === "category" ?
            <Link to={`/category/${props.title.toLowerCase()}`} className="header__title rfsh">{props.title}</Link> :
            <Link to={props.title.toLowerCase()} className="header__title rfsh">{props.title}</Link>
          }
        </li>
      }
    </>
  )};
export default CartWidget;