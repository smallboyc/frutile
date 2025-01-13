import React from "react";
import "./ThemedText.css";

interface ThemedTextProps {
  children: React.ReactNode;
  variant?: "bigTitle" | "title" | "text";
  color?: "black" | "grey" | "white";
}

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
