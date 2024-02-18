import React from 'react'
import './Header.css'

export const Header = () => {
  return (
    <div className='header'>
      <div className="left">
        <img className='userIconWhite' src="https://i.ibb.co/pwvnynM/User-Icon-White.png" alt="user icon" />
        <h2 className='userNameText'>User name</h2>
      </div>
      <div className="mid">
        <img className='socialConnectLogo' src="https://i.ibb.co/6Pyvyp3/Social-Connect-Logo.png" alt="Social Connect Logo" />
      </div>
      <div className="right">
        <ul>
          <li className="home">
            <a href=''>
              <img src="https://i.ibb.co/YPWKwkB/HomeIcon.png" alt="HomeIcon" />
              Home</a>
          </li>
          <li className="chat">
            <a href='#'>
              <img src="https://i.ibb.co/tZ5PyhM/ChatIcon.png" alt="ChatIcon" />
              Chat
            </a>
          </li>
          <li className="notifications">
            <a href=''>
              <img src="https://i.ibb.co/T8sY9Fb/Notifications-Icon.png" alt="NotificationsIcon" />
              Notifications</a>
          </li>
          <li className="friends">
            <a href='#'>            
            <img src="https://i.ibb.co/LZjW5t2/Friends-Icon.png" alt="FriendsIcon" />
              Friends</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
