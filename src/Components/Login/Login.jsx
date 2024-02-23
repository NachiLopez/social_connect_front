import React from 'react'
import "./Login.css"

export const Login = () => {
    return (
        <div className='login'>
            <img className='socialConnectLogo' src="https://i.ibb.co/6Pyvyp3/Social-Connect-Logo.png" alt="SocialConnectLogo" />
            <h1>Social Connect</h1>
            <form action="">
                <h3 htmlFor="">Login or create a new account</h3>
                <label htmlFor="">Email</label>
                <div className="inputEmail">
                    <img src="https://i.ibb.co/Z2jFwnR/MailIcon.png" alt="emailIcon" />
                    <input type="email" placeholder='              Enter your email' />
                </div>
                <label htmlFor="">Password</label>
                <div className="inputPassword">
                    <img src="https://i.ibb.co/Mpxn2yp/Password-Icon.png" alt="passwordIcon" />
                    <input type="password" placeholder='              Enter your password' />
                </div>
                <div className="buttons">
                    <input className='loginBtn' type="button" value="Log in" />
                    <button>Sign in</button>
                </div>
            </form>
        </div>
    )
}
