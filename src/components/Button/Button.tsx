import ThemedText from "../ThemedText/ThemedText";
import "./Button.css";

const Button = ({ label }: { label: string }) => {
  return (
    <button className="button-container" onClick={() => console.log("Action")}>
      <ThemedText>{label}</ThemedText>
    </button>
  );
};

export default Button;
