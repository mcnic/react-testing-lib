import React from "react"
import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { createStore } from "../../store/store"

export const renderWithRedux = (ui = null, initialStore) =>
  render(<Provider store={createStore(initialStore)}>{ui}</Provider>)
