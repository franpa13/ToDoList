import { useState } from "react";
// import PopUp from "./Components/PopUp/PopUp";
import List from "./Components/List/List";
import Form from "./Components/Form/Form";
import AlertDanger from "./Components/Alerts/AlertDanger/AlertDanger";
import AlertTrue from "./Components/Alerts/AlertTrue/AlertTrue";
import { Alert, Button } from "react-bootstrap";

import "./App.css"
function App() {
  const [tarea, setTarea] = useState({
    id: 1,
    tarea: "",
  })
  const [tareas, setTareas] = useState([])

  return (
    <div className="body">

 
      <Form tarea={tarea}
        setTarea={setTarea}
        tareas={tareas}
        setTareas={setTareas}
      />
      <List tarea={tarea} setTarea={setTarea} tareas={tareas} setTareas={setTareas} />

    </div >
  );
}
export default App