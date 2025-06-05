import React from "react";

const ScrollLinks = ({ to, name, className, children }) => {
  return (
    <a href={to} className={className}>
      {name}
      {children}
    </a>
  );
};

export default ScrollLinks;
