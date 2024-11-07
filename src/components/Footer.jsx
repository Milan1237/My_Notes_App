import React from 'react'
import loveLogo from '../assets/footerlogos/love.png'
import linkedinLogo from '../assets/footerlogos/linkedin.png'
import githubLogo from '../assets/footerlogos/github.png'

const Footer = () => {
  return (
    <footer className='fixed ml-[220px] bottom-0 bg-[#111827] w-[calc(100vw-220px)]'>
          <p>Made with <img className='inline-block h-[20px] ' src={loveLogo} alt="" /> by Milan</p>
          <a target='_blank' href="https://www.linkedin.com/in/milan-das-4011321b8/"><img src={linkedinLogo} className='h-[40px] inline-block' alt="linkedin" /></a>
          <a target='_blank' href="https://github.com/Milan1237"><img src={githubLogo} className='h-[40px] inline-block' alt="github" /></a>
      </footer>
  )
}

export default Footer