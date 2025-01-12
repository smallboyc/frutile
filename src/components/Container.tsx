import React from "react";
import "../styles/global.css";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={`container ${className}`}>{children}</div>;
};

export default Container;
