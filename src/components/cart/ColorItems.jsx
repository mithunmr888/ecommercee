import classes from "./ColorItems.module.css";

const ColorItems = (props) => {
  return (
    <li className={classes.items}>
      <h1>{props.title}</h1>
      <img src={props.image} alt="Image of Eye catching colors"></img>
      <p>₹{props.price}</p>
      <button>Add to Cart</button>
    </li>
  );
};

export default ColorItems;
