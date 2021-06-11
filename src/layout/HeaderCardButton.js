import classes from "./CartButton.module.css";
import CartIcon from "../component/Cart/CartIcon";
import CartContext from "../store/cart-context";
import { useContext, useState, useEffect } from "react";

const HeaderCartButton = (props) => {
  const openCart = () => {
    props.openCart();
  };

  const cartCtx = useContext(CartContext);
  const [highlightFlag, setHighlightFlag] = useState(false);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const buttonClass = `${classes.button} ${highlightFlag ? classes.bump : ""}`;
  let { items } = cartCtx;
  useEffect(() => {
    if (items.length < 1) {
      return;
    }
    setHighlightFlag(true);
    const timer = setTimeout(() => {
      setHighlightFlag(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={buttonClass} onClick={openCart}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
