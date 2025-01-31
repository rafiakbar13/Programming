import React, { useState } from 'react'

type Props = {}

const Counter = () => {
    const [count, setCount] = useState<number>(0)
    const [amount, setAmount] = useState<number>(0)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <input
                type="number"
                name='number'
                value={amount}
                onChange={(e) => setAmount(parseInt(e.target.value))}
            />
            <button onClick={() => setAmount(amount)}>Set</button>
        </div>
    )
}

export default Counter