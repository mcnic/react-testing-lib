import React from 'react'
import { render} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from '../../router/AppRouter'

export const renderWithRouter = (ui = null, { route = '/' } = {}) => {
  console.log(route);
  render (
    <MemoryRouter initialEntries={[route]}>
      <AppRouter />
      {ui}
    </MemoryRouter>
  )
}
