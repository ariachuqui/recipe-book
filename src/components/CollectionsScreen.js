import React from 'react';

import { data } from '../data/data';

export const CollectionsScreen = () => {

    const {collections} = data[0];

    return (
        <main className="collections-main width-100">
                <div className="container">
                    <h2 className="font-title color-orange desktop-d-none">Collections</h2>
    
                    <section className="collections-container flex-between flex-wrap">
                        {
                            collections.map(({ id, name, img }) => (
                                <figure 
                                    className="collection"
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
                                    <figcaption className="collection-name font-text color-black text-center">
                                        {name}
                                    </figcaption>
                                </figure>
                            ))
                        }
                    </section>
                </div>
            </main>
    )
}
