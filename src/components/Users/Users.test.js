import { screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";
import axios from 'axios';
import { renderWithRouter } from '../../tests/helpers/renderWithRouter'

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

    renderWithRouter(null, { route: '/users' })

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

    renderWithRouter(null, { route: '/users' })

    const allUsers = await screen.findAllByTestId('user-item');
    // screen.debug()
    // expect(allUsers.length).toBe(2)
    fireEvent.click(allUsers[0]);
    // screen.debug()
    expect(screen.getByTestId('user-page')).toBeInTheDocument()
  });
})