import classes from "./ButtonHeader.module.css";

const ButtonHeader = (props) => {
  return (
    <>
      <button
        className="cursor-pointer font-inherit border-2 border-blue-400 bg-black 
                             mr-1 text-white px-2 py-0.1 flex items-center rounded-full font-bold text-lg"
      >
        cart
      </button>
      <span className="mt-[-1rem] text-blue-400">0</span>
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
