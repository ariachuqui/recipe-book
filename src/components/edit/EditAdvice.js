import React from 'react'

export const EditAdvice = () => {

    const advice = [
        'Colocar la avena instantatea en una taza y cocinarla en el microondas 5 minutos.'
    ]; 

    return (
        <section className="width-100">
            <div className="edit-screen__section container">

                <h2 className="font-title color-black">Consejos y Trucos:</h2>

                <div className="recipe__container">
                    {
                        advice.map(( paragraph, i ) => (
                            <div
                                className="recipe_box"
                                key={ i }
                            >
                                <i className="lightbulb far fa-lightbulb"></i>
                                
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
