import classes from "./AvailableColors.module.css";
import ColorItems from "./ColorItems";
//import Card from "../UI/Card";

const dummy_colors = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const AvailableColors = (props) => {
  return (
    <section className="grid grid-cols-2 gap-5 mt-20 justify-center items-center">
      {dummy_colors.map((color, index) => (
        <ColorItems
          key={Math.random().toString()}
          title={color.title}
          price={color.price}
          image={color.imageUrl}
        />
      ))}
    </section>
  );
};

export default AvailableColors;

/*
const colors = dummy_colors.map((color) => {
  return (
    <ColorItems
      title={color.title}
      price={color.price}
      image={color.imageUrl}
    ></ColorItems>
  );
});

 return (
    <>
     
      <section className={classes.coloumn}>{colors}</section>
    </>
  );
*/
