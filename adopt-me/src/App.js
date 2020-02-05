const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, {
      name: "Lynx",
      animal: "Cat",
      breed: "Maine Coon"
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Sd",
      breed: "Yellowtail"
    }),
    React.createElement(Pet, {
      name: "Arthur",
      animal: "Cat",
      breed: "Maine Coon"
    })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
