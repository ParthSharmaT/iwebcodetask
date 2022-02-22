import React from 'react'
import Styles from './Button.module.css'
const Button1 = (props) => {
  return (
    <div className={Styles.button1}>{props.name}</div>
  )
}

export default Button1