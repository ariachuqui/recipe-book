import React from 'react';

import { data } from '../../data/data';

export const RecipeShowcase = () => {

    const { 
        name, 
        img, 
        level, 
        time,
        ingredients } = data[0].collections[0].recetas[0];


    return (
        <div className="recipe__showcase relative">

            <img
                className="recipe__showcase-img img"
                src={ `/images/${img}` } 
                alt={ name }
            />

            {/* <img className="recipe__showcase-img" src={`/images/${img}`} alt={ name } /> */}

            <div className="recipe__showcase-title-info absolute">
                <p className="recipe__showcase-title font-subtitle color-black text-center margin-bottom-10"> { name } </p>

                <div className="single-collection__info font-text flex-between color-black">
                    <p className="single-collection__p font-text"> <i className="fas fa-carrot color-orange"></i> { `${ingredients.length}` }</p>
                    <p className="single-collection__p font-text"><i className="fas fa-rocket color-orange"></i> { level }</p>
                    <p className="single-collection__p font-text"><i className="far fa-clock color-orange"></i> { time }</p>
                </div>

                <div className="recipe__showcase-info">

                </div>
            </div>
        </div>
    )
}
