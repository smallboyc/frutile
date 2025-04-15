import fruityvice from "../../assets/images";
import Button from "../../components/Button/Button";
import Logo from "../../components/Header/Logo/Logo";
import ThemedText from "../../components/ThemedText/ThemedText";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="logo-container">
          <Logo large />
        </div>
        <div className="title-container">
          <ThemedText variant="title">
            Welcome to my website where you can compare all fruits
          </ThemedText>
        </div>
        <div className="fruityvice-container">
          <img src={fruityvice} alt="fruityvice-api-description" />
          <ThemedText color="grey">
            This website is using the Frutyvice API !
          </ThemedText>
          <Button
            onClick={() => (window.location.href = "https://fruityvice.com")}
          >
            Discover Fruityvice
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
