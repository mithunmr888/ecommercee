import classes from "./Headertop.module.css";
import ButtonHeader from "./ButtonHeader";

const Headertop = (props) => {
  return (
    <>
      <header
        className="fixed flex font-serif justify-center items-center top-0 left-0 w-full h-10 
                              bg-black text-white px-10 shadow-md z-10 text-lg"
      >
        <a href="/" className="mr-40 text-1.3rem">
          HOME
        </a>
        <a href="/" className="mr-40 text-1.3rem">
          STORE
        </a>
        <a href="/" className="mr-40 text-1.3rem">
          ABOUT
        </a>
        <ButtonHeader />
      </header>
      <div
        className="relative flex font-serif justify-center text-center mt-11 w-full 
                          bg-gray-500 text-white shadow-md z-0 font-bold text-8xl pb-20"
      >
        The Generics
      </div>
    </>
  );
};

export default Headertop;

/*return (
    <>
      <header className={classes.header}>
        <a href="/">
          <h1>HOME</h1>
        </a>
        <a href="/">
          <h1>STORE</h1>
        </a>
        <a href="/">
          <h1>ABOUT</h1>
        </a>
        <ButtonHeader></ButtonHeader>
      </header>
      <div className={classes.generics}>The Generics</div>
    </>
  );*/
