import React from "react"
import "@testing-library/jest-dom"
import { screen, fireEvent } from "@testing-library/react"
// import { renderWithRedux } from "../../tests/helpers/renderWithRedux"
import Counter from "./Counter"
import { renderTestApp } from "../../tests/helpers/renderTestApp"

describe("Counter", () => {
  test("increment & decrement", () => {
    // const { getByTestId } = renderWithRedux(<Counter />, {
    //   counter: { value: 999 },
    // })

    const { getByTestId } = renderTestApp(<Counter />, {
      route: "/users",
      initialStore: {
        counter: { value: 999 },
      },
    })

    const ButtonInc = getByTestId("button-inc")
    const ButtonDec = getByTestId("button-dec")
    const ButtonIncAsync = getByTestId("button-inc-async")

    expect(screen.getByTestId("value")).toHaveTextContent("999")

    fireEvent.click(ButtonInc)
    expect(screen.getByTestId("value")).toHaveTextContent("1000")

    fireEvent.click(ButtonDec)
    expect(screen.getByTestId("value")).toHaveTextContent("999")

    fireEvent.click(ButtonIncAsync)
    // expect(screen.getByTestId("value")).toHaveTextContent("1009")
  })
})
