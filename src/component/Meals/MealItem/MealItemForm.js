import Input from "../../../UI/Input";
import classes from "./MealItemForm.module.css";
import { useRef } from "react";

const MealItemForm = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = inputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    props.onAddToCart(enteredAmountNumber);
  };

  const inputRef = useRef();
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        input={{
          type: "number",
          id: `amount_${props.id}`,
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        ref={inputRef}
        label="Amount"
      ></Input>
      <button>+ Add</button>
    </form>
  );
};
export default MealItemForm;
