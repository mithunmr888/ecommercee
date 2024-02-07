import classes from "./CartColors.module.css";

const CartColors = (props) => {
  const quantity = (
    <input
      type="number"
      id="quantity"
      defaultValue={props.amount}
      className="border border-gray-400 rounded-md text-center h-8 w-10 mt-1 mr-2 focus:outline-none focus:ring focus:border-blue-300"
    />
  );
  return (
    <li className="flex justify-between items-center border-b-2 border-gray-300 p-4 font-serif">
      <img
        src={props.image}
        alt={props.title}
        className="w-24 rounded-md mr-2"
      />
      <div className="flex justify-center items-center">
        <h2 className="text-lg text-center mr-2 p-1 px-1 py-1">
          {props.title}
        </h2>
        <span className="font-bold text-black mt-1 mr-2">₹{props.price}</span>
        {quantity}
        <button onClick={props.onRemove} className="button bg-red-500 text-white border text-xs border-red-500 mt-0 px-2 py-1 rounded-md hover:bg-red-600">
          REMOVE
        </button>
      </div>
    </li>
  );
};

export default CartColors;

/*
 return (
    <li className={classes["cart-item"]}>
       
      
      <img src={props.image} alt={props.title}></img>
      <div className={classes.heading}>
        <h2>{props.title}</h2>

        <span className={classes.price}>₹{props.price}</span>
        <span className={classes.amount}>{props.quantity} </span>

        <button className={classes.button}>REMOVE</button>
      </div>
    </li>
  );

*/
