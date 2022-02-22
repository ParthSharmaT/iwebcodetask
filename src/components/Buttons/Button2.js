import React,{useState} from 'react'
import './Button2.css';

const Button2 = (props) => {
    const [style, setStyle] = useState("button2");
    const [toggle, setToggle] = useState(false);
  const changeStyle = () => {
      setToggle(!toggle);
    if(toggle){
    console.log("you just clicked");
  
    setStyle("button21");
    }
    else{
        console.log("you just clicked");
  
    setStyle("button2");
    }
  };
  return (
    <div className={style} onClick={changeStyle}>{props.name}</div>
  )
}

export default Button2