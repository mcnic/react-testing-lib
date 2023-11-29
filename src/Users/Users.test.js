import { render, screen } from '@testing-library/react';
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

describe('users 1', () => {
  test('exists elems', async () => {
    // axios.get.mockResolvedValue({ data: users })
    axios.get.mockImplementation(async () => {
      return new Promise((resolve) => resolve({ data: users }))
    })

    render(<Users />);

    const showUsers = await screen.findAllByTestId('user-item');

    expect(showUsers.length).toEqual(2)
    expect(showUsers[0]).toContainHTML("Leanne Graham")
    expect(showUsers[1]).toContainHTML("Clementina DuBuque")
    expect(axios.get).toHaveBeenCalledTimes(1)
  });
})
