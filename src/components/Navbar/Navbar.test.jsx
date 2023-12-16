import React from "react"
import "@testing-library/jest-dom"
import { screen, fireEvent } from "@testing-library/react"
import { renderWithRouter } from "../../tests/helpers/renderWithRouter"
import Navbar from "./Navbar"
import App from "../../App"

describe("navbar", () => {
  test("main", async () => {
    renderWithRouter(<Navbar />, { route: "/" })
    const mainLink = screen.getByTestId("main-link")
    fireEvent.click(mainLink)
    expect(screen.getByTestId("main-page")).toBeInTheDocument()
  })

  test("about", async () => {
    renderWithRouter(<Navbar />, { route: "/" })
    const aboutLink = screen.getByTestId("about-link")
    fireEvent.click(aboutLink)
    expect(screen.getByTestId("about-page")).toBeInTheDocument()
  })

  test("users", async () => {
    renderWithRouter(<Navbar />, { route: "/" })
    const usersLink = screen.getByTestId("users-link")
    fireEvent.click(usersLink)
    expect(screen.getByTestId("user-page")).toBeInTheDocument()
  })
})
