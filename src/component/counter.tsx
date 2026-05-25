import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, reset } from "../features/counterSlice";

import type { RootState } from "../app/store";

function Counter() {
    const dispatch = useDispatch();

    const count = useSelector(
        (state: RootState) => state.counter.count
    );

    return (
        <div className="w-60 inline-block bg-yellow-300 text-center p-20 rounded-2xl">
            <h1 className="bg-white rounded-xl p-3.5">
                Count: {count}
            </h1>

            <button
                className="bg-green-500 rounded-xl p-1"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>

            <button
                className="bg-red-500 rounded-xl p-1"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>

            <button
                className="bg-blue-500 rounded-xl p-1"
                onClick={() => dispatch(reset())}
            >
                Reset
            </button>
        </div>
    );
}

export default Counter;