import React from 'react'
import "./Login.css"

export const Login = () => {
    return (
        <div className='login-container'>
            <img className='socialConnectLogo' src="https://i.ibb.co/6Pyvyp3/Social-Connect-Logo.png" alt="SocialConnectLogo" />
            <h1>Social Connect</h1>
            <form action="">
                <h3>Login or create a new account</h3>
                <label htmlFor="input-email">Email</label>
                <div className="email-container">
                    <img src="https://i.ibb.co/Z2jFwnR/MailIcon.png" alt="emailIcon" />
                    <input id='input-email' type="email" placeholder='Enter your email' />
                </div>
                <label htmlFor="input-password">Password</label>
                <div className="password-container">
                    <img src="https://i.ibb.co/Mpxn2yp/Password-Icon.png" alt="passwordIcon" />
                    <input id='input-password' type="password" placeholder='Enter your password' />
                </div>
                <div className="buttons">
                    <input className='loginBtn' type="button" value="Log in" />
                    <button>Sign in</button>
                </div>
            </form>
        </div>
    )
}
