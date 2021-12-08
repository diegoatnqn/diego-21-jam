import React from 'react';
import styles from "../styles/gameActions.module.css"

const gameActions = (props) => {
    return (
        <div className="container">
            <div className={styles.buttonRow}>
                <button className="pure-button" onClick={props.mePlanto}> ME PLANTO </button>

                <button className="pure-button" onClick={props.sigo}> SIGO </button>
            </div>
            <div className={styles.container}>
                <h3>Puntaje</h3>
                <div className={styles.col}> {/*dealer column*/}
                    <h4>DEALER  ↑</h4>
                    {props.dealerSum}
                </div>
                <div className={styles.col}>  {/*My column*/}
                    <h4>YO  →</h4>
                    {props.mySum}
                </div>
            </div>
        </div>
        );
}
export default gameActions