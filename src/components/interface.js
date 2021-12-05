import React from 'react';
import styles from '../styles/interfaceStyle.module.css'

const ShowCard=(props)=>{
    
    return (
        <div className={styles.container}
            style={{ backgroundImage: `url(images/${props.img}.jpg)` }}
            onClick={() => { props.click({ src: props.img, description: props.description }) }}
        >
            <p className={styles.cardValue}> {props.value}</p>
            
        </div>
    );
    
}
export default ShowCard