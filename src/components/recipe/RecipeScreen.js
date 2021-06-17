import React, { useState } from 'react';

import { RecipeIngredients } from './RecipeIngredients';
import { RecipeShowcase } from './RecipeShowcase';
import { RecipeSteps } from './RecipeSteps';

export const RecipeScreen = () => {

    const [showSteps, setShowSteps] = useState( false )


    return (
        <main className="recipe__main width-100">
            <RecipeShowcase />
            <section className="responsive-d-none flex-between relative">
                <div className="recipe__option">
                    <h2 
                        className="text-center font-subtitle"
                        onClick={ () => setShowSteps(false) }
                    > 
                        Ingredientes
                    </h2>
                </div>

                <div className="recipe__option">
                    <h2 
                        className="text-center font-subtitle"
                        onClick={ () => setShowSteps(true) }
                    > 
                        Pasos 
                    </h2>
                </div>

                <div className={`recipe__line absolute ${ showSteps && 'recipe__line-right' }`}></div>
            </section>

            <section className='overflow-hidden width-100'>
                <div className={`recipe__carousel ${ showSteps && 'recipe_show-steps' }`}>
                    <h2 className="recipe__title font-title color-orange desktop-d-none">Ingredients</h2>
                    <RecipeIngredients />
                    <h2 className="recipe__title font-title color-orange desktop-d-none">Pasos</h2>
                    <RecipeSteps />
                </div>
            </section>
        </main>
    )
}
