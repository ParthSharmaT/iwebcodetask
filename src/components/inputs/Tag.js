import React from 'react'
import Styles from './Input.module.css'
const Tag = (props) => {
  return (
    <div className={Styles.tag}>{props.tag}</div>
  )
}

export default Tag;