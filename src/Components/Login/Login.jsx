import React from 'react'
import "./Login.css"

export const Login = () => {
    return (
        <div className='login'>
            <img className='socialConnectLogo' src="https://i.ibb.co/6Pyvyp3/Social-Connect-Logo.png" alt="SocialConnectLogo" />
            <h1>Social Connect</h1>
            <form action="">
                <label htmlFor="">Email</label>
                <input type="email" />
                <label htmlFor="">Password</label>
                <input type="password" />
                <div className="buttons">
                    <input type="button" value="Log in" />
                    <button>Sign in</button>
                </div>
            </form>
        </div>
    )
}
