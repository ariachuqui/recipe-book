import React from 'react';
import { Link } from "react-router-dom";

export const RegisterScreen = () => {
    return (
        <div>
            <main className="auth">
            <section className="auth__img">
                <img className="img" src="/images/section-register.jpeg" alt="food" />
            </section>
            <section className="auth__container container">
                <div className="auth__container__title text-center">
                    <h2 className="font-title color-orange">
                        Create Account
                    </h2>

                    <p className="font-text">
                        Already have an account?
                        <Link 
                            className="auth__container__link color-orange margin-left-5"
                            to="/auth/login"    
                        >
                            Login
                        </Link>
                    </p>
                </div>

                <div className="auth__media flex-between">
                    <div className="auth__media__box flex-between flex-alignCenter">
                        <img className="auth__google-img" src="/images/google-logo.png" alt="google-logo"/>
                        <p className="font-text color-black">Sign up with Google</p>
                    </div>

                    <div className="auth__media__box auth__media__fb flex-between flex-alignCenter color-white">
                        <i className="fab fa-facebook-f"></i>
                        <p className="font-text">Sign up with Facebook</p>
                    </div>
                </div>
            
                <div className="flex-between flex-alignCenter">
                    <div className="line"></div>
                    <p className="color-line-color font-text">or</p>
                    <div className="line"></div>
                </div>
            
                <form className="form">

                    <div className="input-container relative">
                        <input 
                            className="input absolute" 
                            type="text"
                            id="name" 
                            required
                            autoComplete = 'off'
                        />

                        <label 
                            className="label absolute" 
                            htmlFor="name"
                        >
                            Name
                        </label>

                        <span className="form__line absolute"></span>
                    </div>

                   <div className="input-container relative">
                        <input 
                            className="input absolute" 
                            type="text"
                            id="email" 
                            required
                            autoComplete = 'off'
                        />

                        <label 
                            className="label absolute" 
                            htmlFor="email"
                        >
                            Email
                        </label>

                        <span className="form__line absolute"></span>
                    </div>

                    <div className="input-container relative">
                        <input 
                            className="input absolute" 
                            type="password"
                            id="password" 
                            required
                            autoComplete = 'off'
                        />

                        <label 
                            className="label absolute" 
                            htmlFor="password"
                        >
                            Password
                        </label>

                        <span className="form__line absolute"></span>
                    </div>

                    <div className="input-container relative">
                        <input 
                            className="input absolute" 
                            type="password"
                            id="password2" 
                            required
                            autoComplete = 'off'
                        />

                        <label 
                            className="label absolute" 
                            htmlFor="password"
                        >
                            Repeat Password
                        </label>

                        <span className="form__line absolute"></span>
                    </div>

                    <button className="btn btn-orange width-100">Register</button>
                </form>
            </section>
        </main>
        </div>
    )
}
