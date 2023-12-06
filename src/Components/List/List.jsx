import React from 'react';
import Tarea from '../Tarea/Tarea';
import { useState } from 'react';

import "./List.css";

export default function List({ tareas, setTareas, tarea, setTarea }) {
  
  return (
    <>
      {tareas.length > 0 ? (
        <>
          <table>
            <thead>
              <tr>
                <th>Tarea</th>
                <th>Acciones</th>
                <th>Descripción</th>
                <th className='th__check'>check</th>
              </tr>
            </thead>
            <tbody>
              {tareas.map((tarea) => (
                <Tarea  key={tarea.id} tarea={tarea} setTareas={setTareas} setTarea={setTarea} />

              ))}
            </tbody>
          </table>
       
        </>

      ) : (
        <p className='msg'>Ninguna tarea pendiente....</p>
      )}
    </>
  );
}
