import React from "react";

export default function Title({ children, className }) {
  return <div className={`${className} font-dancing font-bold`}>{children}</div>;
}
