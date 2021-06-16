import React from 'react';

import { data } from '../../data/data';

export const RecipeSteps = () => {

    const { steps, advice } = data[0].collections[0].recetas[0];

    return (
        <div className="recipe__steps-section width-100">
            
            <div className="recipe__container">
                {
                    steps.map(( paragraph, i ) => (
                        <div
                            className="recipe_box container"
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

            <h2 className="font-subtitule color-black text-center">Trucos y Consejos</h2>

            <div className="recipe__container">
                {
                    advice.map(( paragraph, i ) => (
                        <div
                            className="recipe_box container"
                            key={ i }
                        >
                            <i class="lightbulb far fa-lightbulb"></i>
                            
                            <p className="font-200">{ paragraph }</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
