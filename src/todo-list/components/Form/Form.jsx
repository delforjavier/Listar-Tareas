import React, { useState } from 'react';

const Form=({ onSubmitted = (form) => {} })=> {
    const [form, setForm] = useState({
        titulo: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const resetForm = () => {
        setForm({
            titulo: "",
        });

    };


    const handleSubmit = (e) => {
        e.preventDefault();
    resetForm();

    onSubmitted(form);
    };


    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    name="titulo"
                    type="text"
                    value={form.titulo}
                    onChange={handleChange}
                />
                <button type="submit">Agregar Tarea</button>
            </form>
        </section>
    );
};

export default Form;