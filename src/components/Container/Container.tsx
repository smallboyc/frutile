import React from "react";
import "./Container.css";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="container">{children}</div>;
};

export default Container;
