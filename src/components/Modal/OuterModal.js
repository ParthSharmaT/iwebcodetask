import React from 'react'
import Button1 from '../Buttons/Button1';
import Button2 from '../Buttons/Button2';
import RadioButton from '../Buttons/RadioButton';
import InputArea from '../inputs/InputArea';
import Tag from '../inputs/Tag';

import Styles from './modal.module.css'
const OuterModal = () => {
  return (
    
    <div className={Styles.modaldiv}> 
    <h2 className={Styles.heading}>ROI Calculator</h2>
    <div className={Styles.flex1}>
    <Tag tag="~Cake 0.00"/>
    <RadioButton/>
    <Tag tag="USD"/>
    </div>
    <InputArea />
    <div className={Styles.flex2}>
    <div className={Styles.flex21}>
    <Button1 name="$1000"/>
    <Button1 name="$100"/>
    </div>
    <Tag tag="~Cake 0.00"/>
    </div>
    <h4 className={Styles.timeframe}>TimeFrame</h4>
    <div className={Styles.flex3}>
    <Button2 name="1 day"/>
    <Button2 name="7 days"/>
    <Button2 name="30 days"/>
    <Button2 name="1 year"/>
    <Button2 name="5 years"/>
    </div>
    <div className={Styles.flex4}>
    <h3 className={Styles.timeframe}> Enable Accelerated APY</h3>
    
    <RadioButton/>
    </div>
    <h5 className={Styles.tier}>Select Tier</h5>
    <div className={Styles.flex3}>
    <Button2 name="Tier 1"/>
    <Button2 name="Tier 2"/>
    <Button2 name="Tier 3"/>
    <Button2 name="Tier 4"/>
    <Button2 name="Tier 5"/>
    </div>
    <div className={Styles.flex5}>
    <Tag tag="ROI at Current Rates"/>
    </div>
    <InputArea/>
    <div className={Styles.flex5}>
    <Tag tag="~0.000 CAKE + 0.000 DON"/>
    </div>
    <h5 className={Styles.details}> Hide Details <i className={Styles.arrowhead}>&#8963;</i></h5>
    <div className={Styles.flex6}>
    <h3>APY</h3>
    <h3 className={Styles.apy}>9.0 %</h3>
    </div>
    <ul className={Styles.rules}>
      <li>Calculated based on Current rates</li>
      <li>All figures are estimates provided for your convinience only, and by no means return guaranteed returns.</li>
    </ul>
    </div>
  )
}

export default OuterModal;