import { ThemedTextProps } from "../../types/props";
import "./ThemedText.css";


const ThemedText = ({
  children,
  variant = "text",
  color = "black",
}: ThemedTextProps) => {
  return variant == "text" ? (
    <p className={variant} style={{ color: color }}>
      {children}
    </p>
  ) : (
    <h1 className={variant} style={{ color: color }}>
      {children}
    </h1>
  );
};

export default ThemedText;
