import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  let updatesItems;
  if (action.type === "ADD") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    let updateExistingItem = state.items[existingItemIndex];
    if (updateExistingItem) {
      updateExistingItem = {
        ...updateExistingItem,
        amount: updateExistingItem.amount + action.item.amount,
      };
      updatesItems = [...state.items];
      updatesItems[existingItemIndex] = updateExistingItem;
    } else {
      updatesItems = state.items.concat(action.item);
    }

    const updatedAmount =
      state.totalAmount + action.item.price * action.item.amount;
    console.log(updatedAmount);
    return {
      items: updatesItems,
      totalAmount: updatedAmount,
    };
  }

  if (action.type === "REMOVE") {
    const removedItemItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    let removeItem = state.items[removedItemItemIndex];
    if (removeItem.amount === 1) {
      updatesItems = state.items.filter((item) => {
        console.log(item.id);
        return item.id !== removeItem.id;
      });
      console.log(updatesItems);
    } else {
      removeItem = { ...removeItem, amount: removeItem.amount - 1 };
      updatesItems = [...state.items];
      updatesItems[removedItemItemIndex] = removeItem;
    }
    const changedTotalAmount = state.totalAmount - removeItem.price;
    return {
      items: updatesItems,
      totalAmount: changedTotalAmount,
    };
  }
  if (action.type === "CLEAR") {
    return defaultCartState;
  }
  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item });
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id });
  };
  const clearItemHandler = (id) => {
    dispatchCartAction({ type: "CLEAR" });
  };
  const contextHelper = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItems: addItemHandler,
    removeItem: removeItemHandler,
    clearCart: clearItemHandler,
  };

  return (
    <CartContext.Provider value={contextHelper}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
