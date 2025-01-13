import ThemedText from "../ThemedText/ThemedText";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <section className="footer-icons-container">
        <ThemedText>Fun</ThemedText>
      </section>
      <section className="footer-infos-container">
        <ThemedText color="white">End</ThemedText>
      </section>
    </footer>
  );
};

export default Footer;
