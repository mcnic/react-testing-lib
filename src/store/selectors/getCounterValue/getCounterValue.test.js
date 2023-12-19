import "@testing-library/jest-dom";
import { getCounterValue } from "./getCounterValue";

describe('counter selectors', () => {
  test('work with empty state', () => {
    expect(getCounterValue({})).toBe(0)
  })

  test('work with filled state', () => {
    expect(getCounterValue({
      counter: {
        value: 777
      }
    })).toEqual(777)
  })
})
