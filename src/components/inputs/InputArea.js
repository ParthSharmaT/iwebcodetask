import React from 'react'
import Styles from  './Input.module.css';
import Button1 from '../Buttons/Button1';
const InputArea = () => {
  return (
    <div>
    <input className={Styles.input1} type="text" placeholder="0.000 USD" />
    

    </div>
  )
}

export default InputArea