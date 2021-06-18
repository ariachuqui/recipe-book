import React from 'react'

export const EditIngredients = () => {

    const ingredients = [
        {
            id: '1',
            name:'Avena',
            portion: '1/3',
            measure: 'taza'
        },
        {
            id: '2',
            name:'Leche',
            portion: '1',
            measure: 'chorro'
        }
    ];

    return (
        <section className="width-100">
            <div className="edit-screen__section container">

                <h2 className="font-title color-black">Ingredientes:</h2>

                {
                    ingredients.map(({name, portion, measure, id}) => (
                        <div 
                            className="recipe_box flex-between"
                            key={ id }
                        >
                            <p className="font-200">{ name }</p>
                            <p className="font-200">{portion} {measure}</p>
                        </div>
                    ))
                }



                <form action="#" className="form edit-screen__form">

                    <div className="input-container relative">
                        <input 
                            className="input absolute" 
                            type="text"
                            id="name" 
                            required
                            autoComplete = 'off'
                        />

                        <label 
                            className="label absolute" 
                            htmlFor="name"
                        >
                            Nombre
                        </label>

                        <span className="form__line absolute"></span>
                    </div>


                    <div className="input-container relative">
                        <input 
                            className="input absolute" 
                            type="number"
                            id="portion" 
                            required
                            autoComplete = 'off'
                        />

                        <label 
                            className="label absolute" 
                            htmlFor="portion"
                        >
                            Cantidad
                        </label>

                        <span className="form__line absolute"></span>

                    </div>

                    <div className="input-container relative">
                        <input 
                            className="input absolute" 
                            type="text"
                            id="measure" 
                            required
                            autoComplete = 'off'
                        />

                        <label 
                            className="label absolute" 
                            htmlFor="measure"
                        >
                            Medida
                        </label>

                        <span className="form__line absolute"></span>
                    </div>
                    <button className="btn btn-outline-orange">Agregar</button>
                </form>

            </div>
        </section>
    )
}
