import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App'

describe('router', () => {
  test('exists elems', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>);

    const mainLink = screen.getByTestId('main-link')
    const aboutLink = screen.getByTestId('about-link')

    fireEvent.click(mainLink);
    expect(screen.getByTestId('main-page')).toBeInTheDocument();

    fireEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  })

  test('errors elems', async () => {
    render(
      <MemoryRouter initialEntries={['/jytjhfgfdfascfvhvrercwxfse']}>
        <App />
      </MemoryRouter>);

    expect(screen.getByTestId('error-page')).toBeInTheDocument();
  })
})