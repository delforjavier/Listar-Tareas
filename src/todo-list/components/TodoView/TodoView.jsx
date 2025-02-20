import Form from "../Form/Form";
import Task from "../Task/Task";
import React, { useState } from "react";
import Title from "../Title/Title";
import ListTask from "../ListTask/ListTask";


const TodoView = () => {
    const [tareas, setTareas] = useState([]);

    const crearTarea = (titulo) => ({
        id: window.crypto.randomUUID(),
        titulo: titulo,
        completada: false,

    });

    const addTask = (form) => {
        const nuevaTarea = crearTarea(form.titulo);
        setTareas([...tareas, nuevaTarea]);
    };

    const completedTarea = (id) => {
        const draft = structuredClone(tareas);
        const tarea = draft.find((tarea) => tarea.id === id);
        tarea.completada = !tarea.completada;
        setTareas(draft);
    };

    const deleteTarea = (id) => {
        const nuevaTarea = tareas.filter((tarea) => tarea.id
            !== id);
        setTareas(nuevaTarea);
    };

    return (

        <div>
            <Title>
                <h1>Lista de tareas</h1>
            </Title>

            <Form
                onSubmitted={(form) => {
                    addTask(form);

                }}
            />

            <ListTask
                tareas={tareas}
                renderTask={(tarea) => {
                    return (
                        <Task
                        key={tarea.id}
                        id={tarea.id}
                        titulo={tarea.titulo}
                        completada={tarea.completada}
                        onCompleted={() => {completedTarea(tarea.id);
                        }}
                        onDelete={() => {deleteTarea(tarea.id);
                        }}
                    />                        
                    );
                }}
            />
        </div>
    );

};

export default TodoView;