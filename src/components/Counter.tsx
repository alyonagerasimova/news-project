import {useState} from 'react';
import "./Counter.scss";

const Counter = () => {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count => count + 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>
                +
            </button>
        </div>
    );
};

export default Counter;