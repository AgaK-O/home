import * as React from 'react'
import { Link } from 'gatsby'
import { container, navLinks, heading, navLinkItem, navLinkText, main, header } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    return (
        <div className={container}>
            <header className={header}><span>Aga</span> <br/> <span>Krzysztoń</span></header>
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