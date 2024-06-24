// import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Get in touch with me!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl('contact/emailIcon.png')} alt='Email icon'/>
                <a href='mailto:saurabhvashisth87838@gmail.com'>saurabhvashisth87838@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/linkedinIcon.png')} alt='LinkedIn icon'/>
                <a href='https://www.linkedin.com/in/sourabh-vashisth-07a5bb244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>linkedin.com/Sourabh Vashisth</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/githubIcon.png')} alt='Github icon'/>
                <a href='https://github.com/vashisthg07'>github.com/vashisthg07</a>
            </li>
        </ul>
    </footer>
  )
}
