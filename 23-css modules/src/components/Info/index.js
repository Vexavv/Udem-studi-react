import React from 'react';
import "./index.css"
import styles from './Info.module.css'

console.log(styles)
function Info(props) {
    return (
        <div className={styles.info}>
            <h1>Hello from info component</h1>
            <button className="my-button">Click me in the info component</button>
        </div>
    );
}

export default Info;