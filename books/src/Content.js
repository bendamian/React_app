import React from "react";

function Content() {
  let memberNamme = () => {
    let name = ["Tomy", "Ben", "Anton"];
    let int = Math.floor(Math.random() * 3);
    console.log(int);
    return name[int];
  };

  const handleClick = () => {
    console.log("Add Book");
  };

  const handleClick2 = name => {
    console.log(`${name} Clicked`);
  };

  const handleClick3 = e => {
    console.log(e.target);
  };

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {memberNamme()}</p>
      <button onClick={handleClick}>Add Book</button>
      <button onClick={() => handleClick2("Ben")}>Add Name</button>
      <button onClick={e => handleClick3(e)}>Event Clicked</button>
    </main>
  );
}

export default Content;
