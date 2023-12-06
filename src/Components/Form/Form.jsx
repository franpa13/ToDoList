import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import "./Form.css";

export default function Form({ tareas, setTareas, tarea, setTarea }) {
  const [inputTarea, setInputTarea] = useState(""); // Nuevo estado para la tarea en el formulario

  const handleChange = (e) => {
    setInputTarea(e.target.value);
  }

  const enviarForm = (e) => {
    e.preventDefault();
    setTareas((prev) => [...prev, { id: Date.now(), tarea: inputTarea }]);
    setInputTarea(""); // Limpiar el input después de enviar
  }

  return (
    <div>
      <h1>ToDoList</h1>
      <form onSubmit={enviarForm} >
        <input
          onChange={handleChange}
          value={inputTarea}
          type="text"
          id="taskInput"
          name="taskInput"
          placeholder="Escribe tu tarea aquí"
          required
        />
              <Button type="submit"  variant="success">Añadir Tarea</Button>
      </form>
    </div>
  );
}
