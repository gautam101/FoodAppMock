import classes from "./Header.module.css";
import meal from "../assets/meals.jpeg";
import { Fragment } from "react";
import HeaderCartButton from "./HeaderCardButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>C cube</h1>
        <HeaderCartButton openCart={props.openCart}></HeaderCartButton>
      </header>
      <div className={classes.mainImage}>
        <img src={meal} alt="This is awesome"></img>
      </div>
    </Fragment>
  );
};

export default Header;
