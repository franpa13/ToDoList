import React, { useEffect, useState } from 'react';
import PopUp from '../PopUp/PopUp';
import AlertTrue from '../Alerts/AlertTrue/AlertTrue';
import AlertDanger from '../Alerts/AlertDanger/AlertDanger';
import { Button } from 'react-bootstrap';

export default function Tarea({ tarea, setTareas, setTarea }) {
  const [descripcion, setDescripcion] = useState("");
  const [tareaEditada, setTareaEditada] = useState({ ...tarea });
  const [check, setCheck] = useState(false);
  const [checkTrue, setCheckTrue] = useState(false);
  const [eliminar, setEliminar] = useState("")



  const handleCheck = () => {
    setCheck(!check);
  };
  const mostrarPopDelete = () => {
    setEliminar("awdawd");
    console.log("Eliminar después de mostrarPop:", eliminar);
  };
  
  const deleteTarea = () => {
    // Operación de eliminación
    setTareas((tareas) => {
      const nuevasTareas = tareas.filter((t) => t.id !== tarea.id);
      // Cambio de estado después de completar la operación de eliminación
      mostrarPopDelete();
      return nuevasTareas;
    });
  };

  const handleChange = (e) => {
    setDescripcion(e.target.value);
  };
  useEffect(() => {
    if (check) {
      setCheckTrue(!checkTrue);

      // Después de 2 segundos, restablecer el estado checkTrue
      const timeoutId = setTimeout(() => {
        setCheckTrue(false);
      }, 2000);

      // Limpiar el temporizador cuando el componente se desmonta o check cambia
      return () => clearTimeout(timeoutId);
    } else {
      setCheckTrue(false);
    }
  }, [check]);

  // console.log("esto es eliminar", eliminar);
  return (
    <>
      <tr key={tarea.id}>
        <td className='td__tarea'>{tareaEditada.tarea}</td>
        <td>
          <div className='btns'>
            <PopUp descripcion={descripcion} setDescripcion={setDescripcion} tarea={tarea} setTarea={setTarea} tareaEditada={tareaEditada} setTareaEditada={setTareaEditada} />
            <Button variant="danger" onClick={deleteTarea}>
              Eliminar
            </Button>
          </div>
        </td>

        <td className='td__input'>
          <input value={descripcion} type="text" onChange={handleChange} placeholder="Ingrese descripción" />
        </td>
        <td className='check'>
          <input
            type="checkbox"
            id="myCheckbox"
            name="myCheckbox"
            value="checked"
            onChange={handleCheck}
          />
        </td>
        <p className='alertTrue'>
          {checkTrue && <AlertTrue tarea={tarea} />}
        </p>
      </tr>



    </>
  );
}
