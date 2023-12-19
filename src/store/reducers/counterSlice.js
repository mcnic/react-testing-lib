import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, actions) => {
      state.value += actions.payload
    },
  }
})

// async 'thunk' functions
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

export const incrementAsync2 = (amount) => {
  return async dispatch => {
    setTimeout(() => {
      dispatch(incrementByAmount(amount))
    }, 1000)
  }
}
export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer