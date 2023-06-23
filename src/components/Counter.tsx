import {useState} from 'react';
import styles from "./Counter.module.scss";

const Counter = () => {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count => count + 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment} className={styles.btn}>
                +
            </button>
        </div>
    );
};

export default Counter;