import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  increment,
  decrement,
  incrementAsync,
} from "../../store/reducers/counterSlice.js"
import { getCounterValue } from "../../store/selectors/getCounterValue/getCounterValue.js"

export default function Counter() {
  const count = useSelector(getCounterValue)
  const dispatch = useDispatch()

  return (
    <div>
      <button
        aria-label="Increment value"
        data-testid="button-inc"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span data-testid="value">{count}</span>
      <button
        aria-label="Decrement value"
        data-testid="button-dec"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <br />
      <button
        aria-label="Increment value"
        data-testid="button-inc-async"
        onClick={() => dispatch(incrementAsync(10))}
      >
        Increment async
      </button>
    </div>
  )
}
