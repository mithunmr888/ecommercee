import classes from "./ColorItems.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const ColorItems = (props) => {
  const crtCtx = useContext(CartContext);
  const addCartHandler = () => {
    crtCtx.addItem({
      id: props.id,
      title: props.title,
      image: props.image,
      price: props.price,
      amount: 1,
    });
  };

  return (
    <li className="flex flex-col items-center justify-center p-4 ml-60 space-y-1 bg-white rounded-lg shadow-md max-w-xs">
      <h1 className=" pb-4 font-bold text-5rem">{props.title}</h1>
      <img
        src={props.image}
        alt="Image of Eye catching colors"
        className="w-60 h-60 pb-3 "
      />
      <p className="text-lg pb-3 font-bold">₹{props.price}</p>
      <button
        onClick={addCartHandler}
        className="px-4 py-2 bg-blue-400 text-white rounded-md font-bold hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </li>
  );
};

export default ColorItems;

/* return (
    <li className={classes.items}>
      <h1>{props.title}</h1>
      <img src={props.image} alt="Image of Eye catching colors"></img>
      <p>₹{props.price}</p>
      <button>Add to Cart</button>
    </li>
  );*/
