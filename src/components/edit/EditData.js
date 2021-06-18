import React from 'react'

export const EditData = () => {
    return (
        <section className="width-100">
            <div className="edit-screen__section container">

                <h2 className="font-title color-black">Datos:</h2>

                <form action="#" className="form">

                    <div className="input-container relative">
                        <input 
                            className="input absolute" 
                            type="text"
                            id="title" 
                            required
                            autoComplete = 'off'
                        />

                        <label 
                            className="label absolute" 
                            htmlFor="title"
                        >
                            Titulo
                        </label>

                        <span className="form__line absolute"></span>
                    </div>

                    <div className="input-container relative">
                        <input 
                            className="input absolute" 
                            type="number"
                            id="time" 
                            required
                            autoComplete = 'off'
                        />

                        <label 
                            className="label absolute" 
                            htmlFor="time"
                        >
                            Tiempo de cocción (minutos)
                        </label>

                        <span className="form__line absolute"></span>

                    </div>

                    <div className="input-container">
                        <select className="select">
                            <option value="0">Fácil</option>
                            <option value="1">Intermedio</option>
                            <option value="2">Difícil</option>
                        </select>
                    </div>

                </form>

                <button className="btn btn-orange"> Agregar Foto </button>
            </div>
        </section>
    )
}
