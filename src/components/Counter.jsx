import { useDispatch, useSelector } from "react-redux"

const Counter = () => {
    const dispatch = useDispatch()

    const counter = useSelector(state => state.counter)
    const show = useSelector(state => state.showCounter)

    const incrementHandler = () => {
        dispatch({ type: 'increment' })
    }
    const increaseHandler = () => {
        dispatch({ type: 'increase', payload: 10 })
    }
    const decrementHandler = () => {
        dispatch({ type: 'decrement' })
    }

    const toggleCounter = () => {
        dispatch({ type: 'toggle' })
    }
    return (
        <main className="counter">
            <h2>Redux Counter</h2>
            {show && <div className="value"> {counter}</div>}
            <div className="">
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increase by 10</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounter}>Toggle Counter</button>
        </main>
    )
}

export default Counter
