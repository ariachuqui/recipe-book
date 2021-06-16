import React from 'react'
import { data } from '../data/data';

export const SingleCollectionScreen = () => {

    const {name, recetas} = data[0].collections[0];

    return (
        <main className="collections-main width-100">
                <div className="container">
                    <h2 className="font-title color-orange desktop-d-none">{ name }</h2>
    
                    <section className="single-collection__container collections-container">
                        {
                            recetas.map(({ id, name, img, ingredients, time, level }) => (
                                <figure 
                                    className="single-collection__recipe"
                                    key={ id }
                                >
                                    <div className="collection__img relative">
                                        <div className="background-black-img"></div>
                                        <img
                                            className="img"
                                            src={ `/images/${img}` } 
                                            alt={ name }
                                        />
                                    </div>
                                    <figcaption>
                                        <p className="collection-name font-100 color-orange text-center suspensive"> 
                                            {name} 
                                        </p>
                                        <div className="single-collection__info font-text flex-between color-black">
                                            <p className="single-collection__p font-text"> <i class="fas fa-carrot color-orange"></i> { `${ingredients.length}` }</p>
                                            <p className="single-collection__p font-text">-</p>
                                            <p className="single-collection__p font-text"><i class="far fa-clock color-orange"></i> { time }</p>
                                            <p className="single-collection__p font-text">-</p>
                                            <p className="single-collection__p font-text"><i class="fas fa-rocket color-orange"></i> { level }</p>
                                        </div>
                                    </figcaption>
                                </figure>
                            ))
                        }
                    </section>
                </div>
            </main>
    )
}
