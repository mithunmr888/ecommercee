import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <div className="modal fixed overflow-scroll top-11 right-1 h-50 max-h-96 w-90 max-w-30rem bg-white p-4 rounded-lg border-4 border-blue-300 shadow-md z-40">
          <div className="content">{props.children}</div>
        </div>,
        document.getElementById("overlays")
      )}
    </>
  );
};

export default Modal;

/* 
return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const PortalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        PortalElement
      )}
    </>
  );*/
