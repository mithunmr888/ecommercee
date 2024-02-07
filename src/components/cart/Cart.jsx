import classes from "./Cart.module.css";
import Modal from "./Modal";
import CartColors from "./CartColors";

const items = [
  {
    title: "Colors and artistic color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cartitems"]}>
      {items.map((item) => {
        return (
          <CartColors
            key={Math.random().toString()}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
            image={item.imageUrl}
          ></CartColors>
        );
      })}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      <div className="carthead flex justify-between items-center mt-[-3]">
        <button onClick={props.onClose} className="text-2xl text-red-500 mb-20">
          X
        </button>
        <h1 className="text-2xl mr-60 mt-0 mb-1">CART</h1>
      </div>
      <div className="heading flex justify-around border-y-4">
        <h1 className="font-serif text-lg ml-40">ITEM</h1>
        <h1 className="font-serif text-lg ml-20">PRICE</h1>
        <h1 className="font-serif text-lg">QUANTITY</h1>
      </div>
      {cartItems}
      <div className="total flex justify-between font-bold text-2xl my-4 mx-4">
        <span className=" text-amber-800">Total</span>
        <span className=" text-amber-800">₹200</span>
      </div>
      <button className="font-bold text-black bg-white border border-black h-9 px-5 rounded-md cursor-pointer hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out">
        PURCHASE
      </button>
    </Modal>
  );
};

export default Cart;

/*
 return (
    <Modal onClose={props.onClose}>
      <div  className={classes.carthead}>
        <button onClick={props.onClose}>X</button>
        <h1>CART</h1>
      </div>

      <div className={classes.heading}>
        <h1>ITEM</h1>
        <h1>PRICE</h1>
        <h1>QUANTITY</h1>
      </div>

      {cartItems}

      <div className={classes.total}>
        <span>Total </span>
        <span>₹200</span>
      </div>
      <button className={classes.purchase}>PURCHASE</button>
    </Modal>
  );
 */
