import React from 'react'
import styles from './Footer.module.css'

const Footer = ({theme}) => {
  return (
   <footer className={`${styles.footer} ${styles[theme]}`}>
    <h3>Escreva sobre o que você tem interesse!</h3>
    <p>Happy Moments &copy; 2023</p>
   </footer>
  )
}

export default Footer