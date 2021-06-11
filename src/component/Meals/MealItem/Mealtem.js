import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";
const MealItem = (props) => {
  const price = `Rs ${props.price.toFixed(2)}`;
  const cartContext = useContext(CartContext);
  const addCartHandler = (amount) => {
    cartContext.addItems({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h1>{props.name}</h1>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addCartHandler} id={props.id}></MealItemForm>
      </div>
    </li>
  );
};

export default MealItem;
