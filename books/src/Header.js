import React from "react";

function Header({ title }) {
  // let headerStyle = { backgroundColor: "lightblue", color: "white" };
  return (
    <header /*style={headerStyle}*/>
      <h1>{title}</h1>
    </header>
  );
}

Header.defaultProps = {
  title: "Default Title"
};

export default Header;
