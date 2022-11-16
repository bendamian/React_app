import React from "react";

function Content() {
  let memberNamme = () => {
    let name = ["Tomy", "Ben", "Anton"];
    let int = Math.floor(Math.random() * 3);
    console.log(int);
    return name[int];
  };

  return (
    <main>
      <p> Hello {memberNamme()}</p>
    </main>
  );
}

export default Content;
