import * as React from 'react'
import Logo from '../../assets/icons/code.svg';
import Email from '../../assets/icons/email.svg';
import Github from '../../assets/icons/github.svg';
import Linkedin from '../../assets/icons/linkedin.svg';
import { Link } from 'gatsby'
import { container, navLinks, heading, navLinkItem, main, header, iconLogo, icon, navLinksSocial, socialItem } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    return (
        <div className={container}>
            <div>
                <Logo className={iconLogo} />
                <header className={header}><span>Aga</span> <br /> <span>Krzysztoń</span></header>
            </div>
            <nav>
                <ul className={navLinksSocial}>
                    <li className={socialItem}><a href="mailto:agnieszka.krzyszton@gmail.com"><Email className={icon} aria-label="email icon" /></a></li>
                    <li className={socialItem}><a href="https://github.com/AgaK-O"><Github className={icon} aria-label="github icon" /></a></li>
                    <li className={socialItem}><a href="https://www.linkedin.com/in/agakrzyszton/"><Linkedin className={icon} aria-label="linkedin icon" /></a></li>
                
                </ul>
            </nav>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to='/'>Home</Link></li>
                    <li className={navLinkItem}><Link to='/about'>About</Link></li>
                </ul>
            </nav>
            <main className={main}>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout