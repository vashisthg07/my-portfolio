// eslint-disable-next-line no-unused-vars
import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"

export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img 
                src={getImageUrl('about/aboutImage.png')} 
                alt='sitting with laptop'
                className={styles.aboutImage} 
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt='cursor icon'/>
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>
                            I&apos;m a frontend developer with experience in building and optimized websites
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt='server icon'/>
                    <div className={styles.aboutItemText}>
                        <h3>Detail</h3>
                        <p>
                        I'm a passionate Frontend Web Developer with six months of hands-on experience in creating responsive and user-friendly web applications. My skill set includes HTML, CSS, JavaScript, React, Tailwind CSS, SQL, MongoDB, and Python, allowing me to build dynamic and robust web solutions.
                        </p>
                    </div>
                </li>
                {/* <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt='ml icon'/>
                    <div className={styles.aboutItemText}>
                        <h3>Machine Learning</h3>
                        <p>
                            I have experience in developing supervised machine learning models and solve problems
                        </p>
                    </div>
                </li> */}
            </ul>
        </div>
    </section>
  )
}
