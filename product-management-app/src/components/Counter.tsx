import { useState } from "react";

type CounterProps = {
    init: number;
    children?: JSX.Element;
    onClick?: (x: string, y: number) => void;
}
export const Counter = (props: CounterProps) => {
    const { init, children } = props;
    const [counter, setCounter] = useState(init)
    return <div>
        <h3>Counter: {counter}</h3>
    {children}
        <button onClick={() => setCounter(counter + 1)}>Add 1</button>

    </div>
}