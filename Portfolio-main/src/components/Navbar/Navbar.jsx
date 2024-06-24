// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { getImageUrl } from '../../utils'
import styles from './Navbar.module.css'

export const Navbar = () => {
    const [menuOpen, setmenuOpen] = useState(false)

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href='/'>Portfolio</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn} 
                src={
                    menuOpen 
                    ? getImageUrl('nav/closeIcon.png') 
                    : getImageUrl('nav/menuIcon.png')
                    } 
                    onClick={() => { setmenuOpen(!menuOpen) }} alt='menu-button' />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={()=>{setmenuOpen(false)}}
                >
                    <li><a href='#about'>About</a></li>
                    <li><a href='#experience'>Experience</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}
