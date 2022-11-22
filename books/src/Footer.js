import React from "react";

function Footer({ length }) {
  return (
    <footer>
      <p>
        {length} {length === 1 ? "Book" : "Books"} on the shelves{" "}
      </p>
    </footer>
  );
}

export default Footer;
