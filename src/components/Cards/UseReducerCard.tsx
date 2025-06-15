import React from 'react'

const UseReducerCard = () => {
    const [count, setCount] = React.useReducer((state: number, action: { type: string }) => {
        switch (action.type) {
            case 'increment':
                return state + 1
            case 'decrement':
                return state - 1
            case 'double':
                return state * 2
            case 'reset':
                return 0
                
                throw new Error()
        }
    }, 0)

    return (
        <div>
            <h2>useReducer Hook Example</h2>
            <p>This is a placeholder for the useReducer hook example.</p>
            {/* Add your useReducer logic and UI here */}
            <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount({ type: 'increment' })}>Increment</button>
                <button onClick={() => setCount({ type: 'decrement' })}>Decrement</button>
                <button onClick={() => setCount({ type: 'double' })}>Double</button>
                <button onClick={() => setCount({ type: 'reset' })}>Reset</button>                
            </div>
        </div>

    )
}

export default UseReducerCard