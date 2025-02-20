import React from 'react';

const Task = ({ id, titulo, completada, onCompleted, onDelete = () => { } }) => {
    const handleDelete = () => {
        onDelete();
    };

    const handleCompleted = () => {
        onCompleted();
    };

    return (
        <div>
            <p>
                <span>{titulo}</span>
                <span>{completada ?
                    "Completada" :
                    "Pendiente"}</span>
            </p>
            <button onClick={() => handleCompleted(id)}>✅ </button>
            <button onClick={() => handleDelete(id)}>❌</button>
        </div>
    );
};


export default Task;