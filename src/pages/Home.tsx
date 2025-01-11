import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <h1 className="leckerli-one-regular">Hello Home !</h1>{" "}
      <NavLink to="/yard">Yard</NavLink>
    </>
  );
};

export default Home;
