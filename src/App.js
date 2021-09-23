import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import ToyContainer from "./containers/ToyContainer";
import ToyForm from "./components/ToyForm";

function App() {
  const [toys, setToys] = useState([]);
  const [toyForm, setToyForm] = useState(false);

  useEffect(() => {
    grabToys();
  }, []);

  const grabToys = () => {
    axios.get("http://localhost:8000/toys").then((resp) => {
      console.log(resp.data);
      setToys(resp.data);
    });
  };

  const addToy = (e) => {
    console.log(e, "addToy");
  };

  const addLike = (toy) => {
    console.log(toy, "LIKE BUTTON");
    axios
      .put(`http://localhost:8000/toys/${toy.id}`, {
        ...toy,
        likes: toy.likes + 1,
      })
      .then((resp) => {
        console.log(resp.data);

        const newLikeToy = resp.data;
        setToys(
          toys.map((toy) => {
            return toy.id === newLikeToy.id ? newLikeToy : toy;
          })
        );
      });
  };

  const flipForm = () => {
    if (toyForm == false) {
      setToyForm(true);
    } else {
      return setToyForm(false);
    }
  };

  return (
    <div className="App">
      <h1>Toy bin</h1>
      <Button onClick={() => flipForm()}>Add Toy</Button>
      {toyForm ? <ToyForm /> : null}

      <ToyContainer addLike={addLike} toys={toys} />
    </div>
  );
}

export default App;
