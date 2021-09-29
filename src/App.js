import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import MonsterContainer from "./containers/MonsterContainer";
import MonsterForm from "./components/MonsterForm";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [newMonster, setNewMonster] = useState([]);
  const [monsterForm, setMonsterForm] = useState(false);
  const [newMonsterName, setNewMonsterName] = useState("");

  useEffect(() => {
    grabMonsters();
  }, []);

  const grabMonsters = () => {
    axios.get("http://localhost:8000/monsters").then((resp) => {
      // console.log(resp.data);
      setMonsters(resp.data);
    });
  };
  const addNewMonster = () => {
    axios.post("http://localhost:8000/monsters", newMonster).then((resp) => {
      // console.log(resp);
      let updatedMonsters = [...monsters, resp.data];
      setMonsters(updatedMonsters);
    });
  };

  const handleChangeOfMonster = (e) => {
    e.preventDefault();

    setNewMonster({ ...newMonster, [e.target.name]: e.target.value, likes: 0 });
    console.log(newMonster, "new mons");
  };

  const addLike = (monster) => {
    // console.log({ ...monster }, "LIKE BUTTON");
    axios
      .put(`http://localhost:8000/monsters/${monster.id}`, {
        ...monster,
        likes: monster.likes + 1,
      })
      .then((resp) => {
        // console.log(resp.data);

        const newLikeMonster = resp.data;
        setMonsters(
          monsters.map((monster) => {
            return monster.id === newLikeMonster.id ? newLikeMonster : monster;
          })
        );
      });
  };

  const deletemonster = (id) => {
    console.log(id, "del monster");
    axios.delete(`http://localhost:8000/monsters/${id}`).then((resp) => {
      // console.log(resp);
      setMonsters(
        monsters.filter((monsterId) => {
          return monsterId.id !== id;
        })
      );
    });
  };

  const handleSubmitNameChange = (monster) => {
    console.log({ ...monster }, "SUBMIT");
    console.log(newMonsterName.name, "newmonster");
    axios
      .put(`http://localhost:8000/monsters/${monster.id}`, {
        ...monster,
        name: newMonsterName.name,
      })
      .then((resp) => {
        console.log(resp);
      });
  };

  const updatemonster = (e) => {
    e.preventDefault();
    console.log(e.target.name, "update func");
    setNewMonsterName({ ...newMonsterName, [e.target.name]: e.target.value });
  };

  const flipForm = () => {
    if (monsterForm == false) {
      setMonsterForm(true);
    } else {
      return setMonsterForm(false);
    }
  };

  return (
    <div className="App">
      <h1>Monster Bin</h1>
      <Button onClick={() => flipForm()} variant="success">
        Add Monster
      </Button>
      {monsterForm ? (
        <MonsterForm
          handleChangeOfMonster={handleChangeOfMonster}
          addNewMonster={addNewMonster}
          monsters={monsters}
        />
      ) : null}

      <MonsterContainer
        addLike={addLike}
        monsters={monsters}
        deletemonster={deletemonster}
        updatemonster={updatemonster}
        handleSubmitNameChange={handleSubmitNameChange}
      />
    </div>
  );
}

export default App;
