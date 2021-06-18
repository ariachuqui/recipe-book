import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../actions/auth'

export const Sidebar = () => {

    const dispatch = useDispatch();

    const [showSidebar, setShowSidebar] = useState(false)
    
    const hideSidebar = () => {
        setShowSidebar(false)
    }

    const handleLogout = () => dispatch( logout() )

    return (
        <aside className={`sidebar ${showSidebar && 'show-sidebar'}`}>
            <nav className="responsive-d-none container flex-alignCenter">
                <div 
                    className="sidebar__circle flex-center"
                    onClick={ hideSidebar }
                >
                    <i class="fas fa-chevron-left color-orange"></i>
                </div>

                <h2 
                    className="sidebar__title font-title color-orange"
                >
                    Configuración
                </h2>
                
            </nav>

            <div className="sidebar__line line responsive-d-none"></div>

            <section className="sidebar__section">
                <h2 className="container font-subtitle color-black">Crear</h2>
                <div className="sidebar-selection">
                    <div className="container flex-alignCenter">
                        <i className="fas fa-plus color-orange"></i>
                        <p className="margin-left-10 color-orange font-100">Nueva coleccion</p>
                    </div>
                </div>
                <div className="sidebar-selection">
                    <div className="container flex-alignCenter">
                        <i className="fas fa-plus color-orange"></i>
                        <p className="margin-left-10 color-orange font-100">Nueva receta</p>
                    </div>
                </div>
            </section>

            <section className="sidebar__section">
                <h2 className="container font-subtitle color-black">Usuario</h2>
                <div className="sidebar-selection">
                    <div className="container flex-alignCenter">
                        <div className="sidebar__circle flex-center">
                            <i className="far fa-user color-orange"></i>
                        </div>
                        <p className="margin-left-10 color-orange font-100">Editar Perfil</p>
                    </div>
                </div>
            </section>

            <section className="sidebar__section">
                <h2 className="container font-subtitle color-black">Ajustes</h2>
                
                <div className="sidebar-selection">
                    <div className="container flex-alignCenter">
                        <div className="sidebar__circle flex-center">
                            <i className="fas fa-globe color-orange"></i>
                        </div>
                        <p className="margin-left-10 color-orange font-100">Idioma</p>
                    </div>
                </div>

                <div className="sidebar-selection">
                    <div className="container flex-alignCenter">
                        <div className="sidebar__circle flex-center">
                            <i className="fas fa-ruler-horizontal color-orange"></i>
                        </div>
                        <p className="margin-left-10 color-orange font-100">Unidades de medida</p>
                    </div>
                </div>

                <div className="sidebar-selection">
                    <div className="container flex-alignCenter">
                        <div className="sidebar__circle flex-center">
                            <i className="far fa-comment color-orange"></i>
                        </div>
                        <p className="margin-left-10 color-orange font-100">Contacto</p>
                    </div>
                </div>
            </section>
       
            <div className="line"></div>

            <section className="sidebar__section">
                <div 
                    className="sidebar-selection"
                    onClick={handleLogout}
                >
                    <div className="container flex-alignCenter">
                        <div className="sidebar__circle flex-center">
                            <i className="fas fa-sign-out-alt color-orange"></i>
                        </div>
                        <p className="margin-left-10 color-orange font-100">Cerrar Sesión</p>
                    </div>
                </div>
            </section>
            
            
        </aside>
    )
}
