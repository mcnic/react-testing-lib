import "@testing-library/jest-dom";
import counterReducer, { decrement, increment, incrementByAmount } from "./counterSlice";

const state = { value: 10 }

describe('counter redusers', () => {

  test('increment', () => {
    increment(state)
    expect(counterReducer({ value: 10 }, increment())).toEqual({ value: 11 })
  })

  test('decrement', () => {
    increment(state)
    expect(counterReducer({ value: 10 }, decrement())).toEqual({ value: 9 })
  })

  test('with empty state', () => {
    increment(state)
    expect(counterReducer(undefined, increment())).toEqual({ value: 1 })
    expect(counterReducer(undefined, decrement())).toEqual({ value: -1 })
  })

  test('increment amount', () => {
    increment(state)
    expect(counterReducer({ value: 10 }, incrementByAmount(10))).toEqual({ value: 20 })
  })
})
