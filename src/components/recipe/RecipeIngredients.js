import React, { useState } from 'react';

import { data } from '../../data/data';

export const RecipeIngredients = () => {

    const { ingredients, portions } = data[0].collections[0].recetas[0];

    const [portionNumber, setPortionNumber] = useState(Number(portions));

    const sumPortion = () => {
        setPortionNumber( p => p + 1)
    }

    const restPortion = () => {

        setPortionNumber( p => p - 1)
    }

    return (
        <div className="width-100">

            <div className="recipe__ingredients-portions flex-center">
                <i 
                    className="fas fa-plus-square" 
                    onClick={ sumPortion }
                ></i>

                <h2 className="font-subtitle">{portionNumber} porciones</h2>
                
                <i 
                    className={`fas fa-minus-square ${(portionNumber === 1) && 'btn-disable'}`} 
                    onClick={ restPortion }
                ></i>
            </div>
        

            {
                ingredients.map(({name, portion, measure, id}) => (
                    <div 
                        className="recipe_box flex-between container"
                        key={ id }
                    >
                        <p className="font-200">{ name }</p>
                        <p className="font-200">{portion} {measure}</p>
                    </div>
                ))
            }

        </div>
    )
}
