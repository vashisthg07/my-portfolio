// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from './Hero.module.css'
import resume from './Resume.pdf'

import { getImageUrl } from '../../utils'

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I&apos;m Sourabh</h1>
            <p className={styles.description}>I&apos;m a frontend developer with 6 months of experince. Reach out if you&apos;d like to learn more.</p>
            <div className={styles.btns}>
              <a className={styles.contactBtn} href='mailto:sourabhvashisth87838@gmail.com'>Contact me</a>
              <a className={styles.contactBtn} href={resume} download="Sourabh's Resume">Download CV</a>
            </div>
        </div>
        <img 
            className={styles.heroImg} 
            src={getImageUrl("hero/myimg.jpeg")} 
            alt='Hero image'
        />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}
