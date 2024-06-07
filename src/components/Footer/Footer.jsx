import React from 'react'
import './Footer.css'
import github_icon from '../../assets/github1.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <a href="https://github.com/vladdlevshuk"><img src={github_icon} alt="Github Icon" width="42" height="42"/></a>
        <span>© 2023</span>
    </div>
  )
}

export default Footer