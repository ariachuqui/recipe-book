import React from 'react';
import { Link } from "react-router-dom";

export const LoginScreen = () => {
    return (
        <main className="auth">
            <section className="auth__img">
                <img className="img" src="/images/section-login.jpeg" alt="food image" />
            </section>
            <section className="auth__container container">
                <div className="auth__container__title text-center">
                    <h2 className="font-title color-orange">
                        Login
                    </h2>

                    <p className="font-text">
                        Not registered yet? 
                        <Link 
                            className="auth__container__link color-orange margin-left-5"
                            to="/auth/register"    
                        >
                            Create an account
                        </Link>
                    </p>
                </div>

                <div className="auth__media flex-between">
                    <div className="auth__media__box flex-between flex-alignCenter">
                        <img className="auth__google-img" src="/images/google-logo.png" alt="google-logo"/>
                        <p className="font-text color-black">Sign in with Google</p>
                    </div>

                    <div className="auth__media__box auth__media__fb flex-between flex-alignCenter color-white">
                        <i className="fab fa-facebook-f"></i>
                        <p className="font-text">Sign in with Facebook</p>
                    </div>
                </div>
            
                <div className="flex-flex-between flex-alignCenter">
                    <div className="line"></div>
                    <p className="color-line-color font-text">or</p>
                    <div className="line"></div>
                </div>
            
                <form className="form">

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

                    <button className="btn btn-orange width-100">Login</button>
                </form>
            </section>
        </main>
    )
}
