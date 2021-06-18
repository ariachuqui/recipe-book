import React from 'react'
import { data } from '../../data/data';

export const EditColecctions = () => {

    const {collections} = data[0];

    return (
        <section className="width-100">
            <div className="edit-screen__section container">

                <h2 className="font-title color-black">Selecciona las colecciones:</h2>

                <div className="collections-container flex-between flex-wrap">
                        {
                            collections.map(({ id, name, img }) => (
                                <figure 
                                    className="collection edit-screen__section-collection"
                                    key={ id }
                                >
                                    <div className="collection__img relative">
                                        <div className="background-black-img"></div>
                                        <img
                                            className="img"
                                            src={ `/images/${img}` } 
                                            alt={ name }
                                        />

                                        <div className="edit-screen__check absolute">
                                            <i class="fas fa-check"></i>
                                        </div>
                                    </div>
                                    <figcaption className="collection-name font-text color-black text-center">
                                        {name}
                                    </figcaption>

                                    
                                </figure>
                            ))
                        }
                    </div>

            </div>
        </section>
    )
}
