import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementAsync, incrementAsync2 } from '../store/reducers/counterSlice.js'

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  return (
    <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <br />
      <button
        aria-label="Increment value"
        onClick={() => dispatch(incrementAsync(10))}
      >
        Increment async
      </button>
    </div>
  )
}
