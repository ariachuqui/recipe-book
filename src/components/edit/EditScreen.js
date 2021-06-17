import React, { useEffect, useState } from 'react'

import { EditAdvice } from './EditAdvice';
import { EditColecctions } from './EditColecctions';
import { EditData } from './EditData';
import { EditIngredients } from './EditIngredients';
import { EditSteps } from './EditSteps';

export const EditScreen = () => {

    const [pagination, setPagination] = useState( 0 );
    // const [sliderMargin, setSliderMargin] = useState( 0 )

    // useEffect(() => {
    //     if( pagination === 1 )
    //         setSliderMargin( 0 )

    //     setSliderMargin( `${pagination - 1}00` )
    // }, [pagination])

    return (
        <div className="edit-screen">
            <h2 className="font-title color-orange text-center">Nueva receta</h2>

            <div className="overflow-hidden">
                <div
                    style={{"margin-left": `-${pagination}%`}}
                    className="edit-screen__carousel"
                >
                    <EditData />
                    <EditIngredients />
                    <EditSteps />
                    <EditAdvice />
                    <EditColecctions />
                </div>
            </div>

            <div className="edit-screen__pagination flex-between container">
                <div
                    className={`btn btn-orange ${ (pagination === 0 ) && 'btn-disable' }`}
                    onClick={() => setPagination( p => p - 100 )}
                > Anterior</div>

                <div
                    className={`btn btn-orange ${ (pagination === 400 ) && 'btn-disable' }`}
                    onClick={() => setPagination( p => p + 100 )}
                > Siguiente</div>
            </div>
        </div>
    )
}
