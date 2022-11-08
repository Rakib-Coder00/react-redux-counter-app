import { useDispatch, useSelector } from "react-redux"
import { counterActions } from "../redux/store"

const Counter = () => {
    const dispatch = useDispatch()

    const counter = useSelector(state => state.counter.counter)
    // console.log(counter);
    const show = useSelector(state => state.counter.showCounter)
    // console.log(show);

    const incrementHandler = () => {
        dispatch(counterActions.increment())
    }
    const increaseHandler = () => {
        dispatch(counterActions.increase(10))
    }
    const decrementHandler = () => {
        dispatch(counterActions.decrement())
    }

    const toggleCounter = () => {
        dispatch(counterActions.toggle())
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
