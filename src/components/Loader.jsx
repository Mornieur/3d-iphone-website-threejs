import AnimatedLogo from "../assets/images/logo-animated.gif";

function Loader() {
  return (
    <div className="loader">
      <img className="logo" src={AnimatedLogo} alt="apple loader" />
    </div>
  );
}

export default Loader;
