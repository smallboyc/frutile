import ThemedText from "../ThemedText/ThemedText";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <section className="footer-icons-container">
        <ThemedText>Made with - ReactJS.</ThemedText>
      </section>
      <section className="footer-infos-container">
        <ThemedText color="white">Contact : maxencedup44@gmail.com</ThemedText>
        <ThemedText color="white">| E4 - IMAC</ThemedText>
      </section>
    </footer>
  );
};

export default Footer;
