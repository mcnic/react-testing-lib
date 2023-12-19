import React from "react"
import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { createStore } from "../../store/store"
import { MemoryRouter } from "react-router-dom"
import AppRouter from "../../router/AppRouter"

export const renderTestApp = (ui = null, options = {}) => {
  const store = createStore(options?.initialStore)

  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[options?.route || "/"]}>
        <AppRouter />
        {ui}
      </MemoryRouter>
    </Provider>
  )
}
