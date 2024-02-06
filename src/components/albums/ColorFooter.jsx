import classes from "./ColorFooter.module.css";

const ColorFooter = (props) => {
  return (
    <footer className="relative bottom-0 left-0 w-full bg-blue-400 text-white font-serif flex justify-between items-center px-10 py-4 shadow-md">
      <span className="text-8xl">The Generics</span>
      <a
        href="https://www.youtube.com/watch?v=_00lANhPkKc&list=RDmTuPDGFboNU&index=19"
        className="ml-4"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/256/1384/1384060.png"
          alt="Youtube"
          className="w-8"
        />
      </a>
      <a href="https://open.spotify.com/" className="ml-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png"
          alt="Spotify"
          className="w-8"
        />
      </a>
      <a href="https://www.facebook.com/" className="ml-4">
        <img
          src="https://cdn-icons-png.flaticon.com/256/124/124010.png"
          alt="Facebook"
          className="w-8"
        />
      </a>
    </footer>
  );
};

export default ColorFooter;

/*  return (
    <footer className={classes.footer}>
      <span>The Generics</span>
      <a href="https://www.youtube.com/watch?v=_00lANhPkKc&list=RDmTuPDGFboNU&index=19">
        <img
          src="https://cdn-icons-png.flaticon.com/256/1384/1384060.png"
          alt="Youtube"
        ></img>
      </a>
      <a href="https://open.spotify.com/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png"
          alt="Spotify"
        ></img>
      </a>
      <a href="https://www.facebook.com/">
        <img
          src="https://cdn-icons-png.flaticon.com/256/124/124010.png"
          alt="Facebook"
        ></img>
      </a>
    </footer>
  );*/
