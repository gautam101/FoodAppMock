import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

import { Fragment } from "react";
const Modal = (props) => {
  const BackDrop = (props) => {
    const close = () => {
      props.onClick();
    };
    return <div onClick={close} className={classes.backdrop}></div>;
  };
  const ModalOverlay = (props) => {
    return (
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    );
  };
  const elem = document.getElementById("backdrop");
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop onClick={props.close}></BackDrop>, elem)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        elem
      )}
    </Fragment>
  );
};
export default Modal;
