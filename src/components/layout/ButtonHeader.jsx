import classes from "./ButtonHeader.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const ButtonHeader = (props) => {
  const crtCtx = useContext(CartContext);
  const { items } = crtCtx;
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <>
      <button
        onClick={props.onOpen}
        className="cursor-pointer font-inherit border-2 border-blue-400 bg-black 
                             mr-0.5 text-white px-2 py-0.1 flex items-center rounded-full font-bold text-lg"
      >
        cart
      </button>
      <span className="mt-[-1rem] text-blue-400">{numberOfCartItems}</span>
    </>
  );
};

export default ButtonHeader;

/* return (
    <>
      <button className={classes.button}>cart</button>
      <span>0</span>
    </>
  );*/
