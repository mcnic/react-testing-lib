import "@testing-library/jest-dom";
import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouter } from './tests/helpers/renderWithRouter'

describe('router', () => {
  // test('exists elems', async () => {
  //   renderWithRouter(null, { route: '/' })
  //   const mainLink = screen.getByTestId('main-link')
  //   const aboutLink = screen.getByTestId('about-link')

  //   fireEvent.click(mainLink);
  //   expect(screen.getByTestId('main-page')).toBeInTheDocument();

  //   fireEvent.click(aboutLink);
  //   expect(screen.getByTestId('about-page')).toBeInTheDocument();
  // })

  test('errors elems', async () => {
    renderWithRouter(null, { route: '/jytjhfgfdfascfvhvrercwxfse' })

    expect(screen.getByTestId('error-page')).toBeInTheDocument();
  })
})
