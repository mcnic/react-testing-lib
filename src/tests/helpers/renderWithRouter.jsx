import React from "react"
import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import AppRouter from "../../router/AppRouter"

export const renderWithRouter = (ui = null, { route = "/" } = {}) => {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <AppRouter />
      {ui}
    </MemoryRouter>
  )
}
