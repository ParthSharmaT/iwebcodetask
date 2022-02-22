import React from 'react'
import Styles from './Button.module.css'

const RadioButton = () => {
  return (
    <div className={Styles.radiobutton}>
        <label class={Styles.switch}>
        <input type="checkbox"/>
        <span className={Styles.slider}></span>
        </label>
    </div>
  )
}

export default RadioButton