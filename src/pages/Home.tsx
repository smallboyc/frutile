import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>fr'utile !</h1>{" "}
      <NavLink to="/yard">Yard</NavLink>
    </>
  );
};

export default Home;
