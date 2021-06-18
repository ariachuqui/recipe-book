import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleNavState } from '../../actions/ui';

import { data } from '../../data/data';

export const Nav = () => {

    const { navState } = useSelector(state => state.ui)
    const dispatch = useDispatch();

    //current path
    const path = window.location.pathname;

    //navState changes depends on the path
    useEffect(() => {
        
        if ( path === '/' )
            dispatch( handleNavState( 'collections' ) )

        if ( path.includes('collection') )
            dispatch( handleNavState( 'single-collection' ))

        if ( path.includes('recipe') )
            dispatch( handleNavState( 'single-recipe' ))
        
    }, [ path, dispatch ])

    const {name_user, collections} = data[0];


    return (
        <nav className="nav container">
                <div className="nav__logo">
                    <p className="font-subtitle color-orange">Recipe Book</p>
                </div>
                
                <div className="section-1 flex-alignCenter font-100 responsive-d-none ">
                    {
                        (navState !== 'collections') && <i className="fas fa-chevron-left"></i>
                    }
                </div>
                <div className="section-2 flex-alignCenter responsive-d-none ">
                    {
                        (navState === 'collections')
                        ? <p className="font-title color-orange">Colletions</p>
                        :<p className="font-title color-orange">{collections[1].name}</p>
    
                    }
                </div>
                <div className="section-3 flex-self-end flex-alignCenter font-100 responsive-d-none ">
                    <i className="fas fa-cog color-black"></i>
                </div>
                <div className="section-4 flex-center">
                    {
                        (navState !== 'single-recipe') && 
                        <>
                            <form className="nav__form">
                                <input 
                                    className="search" 
                                    type="text"
                                    required
                                    autoComplete = 'off'
                                    placeholder="Search"
                                />
                            </form>
                            
                            <div className="color-orange">
                                {(navState !== 'collections') && <i className="fas fa-sliders-h"></i>}
                                <i className="fas fa-plus margin-left-10 responsive-d-none "></i>
                            </div>
                        </>
                    }
                    
            </div>
                
                <div className="nav__user flex-alignCenter ">
                    <p className="font-100 color-black">{name_user}</p>
                </div>
        </nav>
    )
}
