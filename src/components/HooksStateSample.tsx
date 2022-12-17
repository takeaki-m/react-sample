import { useState } from "react";

type CounterProps = {
    initalValue: number
}

const Counter = (props: CounterProps) => {
    const { initalValue } = props
    // カウントを保持する一つの状態をuseState()で宣言。引数には初期値を指定
    // countが現在の状態、setCountが状態を更新する関数

    const [count, setCount] = useState(initalValue)

    return (
        <div>
            <p>Count: {count}</p>
            {/* setCountを呼びことで状態を更新 */}
            <button onClick={() => setCount(count -1)}>-</button>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}></button>
        </div>
    )

}

export default Counter
