import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";
import { MemoryRouter } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserDetailsPage from '../pages/UserDetailsPage'
import Users from './Users';
import axios from 'axios';

jest.mock('axios');

const users = [
  {
    "id": 1,
    "name": "Leanne Graham",
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
  }
]

describe('users', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  test('exists elems', async () => {
    axios.get.mockResolvedValue({ data: users })
    // axios.get.mockImplementation(async () => {
    //   return new Promise((resolve) => resolve({ data: users }))
    // })

    render(<Users />, { wrapper: BrowserRouter });

    const showUsers = await screen.findAllByTestId('user-item');

    expect(showUsers.length).toEqual(2)
    expect(showUsers[0]).toContainHTML("Leanne Graham")
    expect(showUsers[1]).toContainHTML("Clementina DuBuque")
    expect(axios.get).toHaveBeenCalledTimes(1)
  });

  test('redirect in router', async () => {
    axios.get.mockResolvedValue({ data: users })
    // axios.get.mockImplementation(async () => {
    //   return new Promise((resolve) => resolve({ data: users }))
    // })

    render(
      <MemoryRouter initialEntries={['/users']}>
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetailsPage />} />
        </Routes>
      </MemoryRouter>);
    // const user = userEvent.setup()

    const allUsers = await screen.findAllByTestId('user-item');
    // screen.debug()
    expect(allUsers.length).toBe(2)
    fireEvent.click(allUsers[0]);
    // screen.debug()
    expect(screen.getByTestId('user-page')).toBeInTheDocument()
  });
})