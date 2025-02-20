import React from 'react';


const ListTask = ({tareas, renderTask }) => {
    return (
        <section>
            {tareas.map((tarea) => {
                return renderTask(tarea);                
            })}
        </section>
    );
};

export default ListTask;