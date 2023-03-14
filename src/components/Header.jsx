import React from "react";

const Header = () => {
  return (
    <>
      <div>{import.meta.env.VITE_NAME}</div>
      <div>Hello World</div>
    </>
  );
};

export default Header;
