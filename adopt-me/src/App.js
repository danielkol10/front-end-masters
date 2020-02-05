import React from "react";
// eslint-disable-next-line no-unused-vars
import { render } from "react-dom";

// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line import/no-unresolved
import Pet from "./Pet";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt me!"),
  //   React.createElement(Pet, {
  //     name: "Lynx",
  //     animal: "Cat",
  //     breed: "Maine Coon"
  //   }),
  //   React.createElement(Pet, {
  //     name: "Pepper",
  //     animal: "Sd",
  //     breed: "Yellowtail"
  //   }),
  //   React.createElement(Pet, {
  //     name: "Arthur",
  //     animal: "Cat",
  //     breed: "Maine Coon"
  //   })
  // ]);

  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Crow" />
      <Pet name="Doink" animal="Cat" breed="Mixed" />
    </div>
  );
};

// eslint-disable-next-line no-undef
render(<App />, document.getElementById("root"));
