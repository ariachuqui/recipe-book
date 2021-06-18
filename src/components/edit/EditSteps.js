import React from 'react'

export const EditSteps = () => {

    const steps = [
        'Colocar la avena instantatea en una taza y agregarle la leche.',
        'Meterlo en el microondas y cocinarla en el microondas 5 minutos.',
        'Cuando veamos que la avena empieza a absorver la leche, agregar la banana y las semillas'
    ];


    return (
        <section className="width-100">
            <div className="edit-screen__section container">

                <h2 className="font-title color-black">Pasos:</h2>

                <div className="recipe__container">
                    {
                        steps.map(( paragraph, i ) => (
                            <div
                                className="recipe_box"
                                key={ i }
                            >
                                <p className="recipe__inside-circle">
                                    { i + 1 }
                                </p>
                                
                                <p className="font-200">{ paragraph }</p>
                            </div>
                        ))
                    }

                </div>



                <form action="#" className="form edit-screen__form">

                    <div className="textarea-container relative">
                        <textarea 
                            className="input absolute" 
                            type="text"
                            id="description" 
                            required
                            autoComplete = 'off'
                        ></textarea>

                        <label 
                            className="label absolute" 
                            htmlFor="description"
                        >
                            Descripción
                        </label>

                        <span className="form__line absolute"></span>
                    </div>

                    <button className="btn btn-outline-orange">Agregar</button>
                </form>

            </div>
        </section>
    )
}
