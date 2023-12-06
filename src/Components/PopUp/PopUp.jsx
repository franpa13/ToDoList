
import "./PopUp.css"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function PopUp({ descripcion, setDescripcion, tarea, setTarea, tareaEditada, setTareaEditada }) {
    const [show, setShow] = useState(false);

    console.log(tareaEditada);
    const handleChange = (e) => {
       
        setTareaEditada((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleChangeDescripcion = (e) => {
        
        setDescripcion(e.target.value);
    };

    const handleClose = () => {
        setShow(false);
    };

    const handleSaveChange = () => {
        setTarea(tareaEditada);
        handleClose();
    };

    const handleShow = () => {
        // setTareaEditada({ ...tarea }); // Reiniciar el estado al mostrar el modal
        setShow(true);
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Editar
            </Button>

            <Modal className='modal' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Tarea</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Form >
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Tarea</Form.Label>
                            <Form.Control
                                type="text"
                                name="tarea"
                                placeholder={tarea.tarea}
                                value={tareaEditada.tarea}
                                onChange={handleChange}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={1}
                                value={descripcion}
                                name="descripcion"
                                placeholder={descripcion}
                                onChange={handleChangeDescripcion}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveChange}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PopUp;
