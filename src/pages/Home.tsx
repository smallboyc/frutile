import Logo from "../components/Header/Logo/Logo";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="logo-container">
          <Logo large/>
        </div>
        <p className="welcome-text">
          Welcome to my website where you can compare all fruits
        </p>
      </div>
    </div>
  );
};

export default Home;
