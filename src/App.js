import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import ToyContainer from "./containers/ToyContainer";
import ToyForm from "./components/ToyForm";

function App() {
  const [toys, setToys] = useState([]);
  const [newToy, setNewToy] = useState([]);
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
  const addNewToy = () => {
    axios.post("http://localhost:8000/toys", newToy).then((resp) => {
      console.log(resp);
      let updatedToys = [...toys, resp.data];
      setToys(updatedToys);
    });
  };

  const handleChangeOfToy = (e) => {
    e.preventDefault();

    // console.log(e.target.value, "addToy");
    setNewToy({ ...newToy, [e.target.name]: e.target.value, likes: 0 });
    console.log(newToy, "new TOy");
  };

  const addLike = (toy) => {
    console.log({ ...toy }, "LIKE BUTTON");
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

  const deleteToy = (id) => {
    console.log(id, "del toy");
    axios.delete(`http://localhost:8000/toys/${id}`).then((resp) => {
      console.log(resp);
      setToys(
        toys.filter((toyId) => {
          return toyId.id !== id;
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
      {toyForm ? (
        <ToyForm
          handleChangeOfToy={handleChangeOfToy}
          addNewToy={addNewToy}
          toys={toys}
        />
      ) : null}

      <ToyContainer addLike={addLike} toys={toys} deleteToy={deleteToy} />
    </div>
  );
}

export default App;
