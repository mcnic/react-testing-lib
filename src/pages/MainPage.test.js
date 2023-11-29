import { fireEvent, render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MainPage from './MainPage';

describe('all 1', () => {
  test('exists elems', async () => {
    render(<MainPage />);
    const linkElement = screen.getByText(/Hello world!/i);
    expect(linkElement).toBeInTheDocument();

    await screen.findByRole('heading');
    await screen.findByRole('button');

    const header = screen.getByRole('heading');
    expect(header).toBeInTheDocument();

    const input = screen.getByPlaceholderText(/input value/i);
    expect(input).toBeInTheDocument();
    expect(input).toMatchSnapshot();

    await screen.findAllByText(/hello/i);
  });

  test('rdynamic elems', async () => {
    render(<MainPage />);
    const nulledText = screen.queryByText(/data/i);
    expect(nulledText).toBe(null);

    const nulledText2 = await screen.findByText(/data/i);
    expect(nulledText2).toBeInTheDocument();
  });

  test('onClick button effect', async () => {
    render(<MainPage />);

    // screen.debug();

    const button = screen.getByRole('button');

    act(() => {
      button.click();
    });

    // screen.debug();
    const textToggle = await screen.findByText(/toggle/i);
    expect(textToggle).toBeInTheDocument();

    // screen.debug();
  });

  test('by testid', async () => {
    render(<MainPage />);

    let div = screen.queryByTestId('toggle-elem');
    expect(div).toBe(null)

    const btn = screen.getByTestId('toggle-btn');

    act(() => {
      fireEvent.click(btn);
    });

    div = screen.queryByTestId('toggle-elem');
    expect(div).toBeInTheDocument()

    act(() => {
      fireEvent.click(btn);
    });

    div = screen.queryByTestId('toggle-elem');
    expect(div).toBe(null)
  });

  test('input', async () => {
    render(<MainPage />);

    expect(screen.getByTestId('value-elem')).toContainHTML('');

    const input = screen.getByPlaceholderText(/input value/i);

    act(() => {
      fireEvent.change(input, {
        target: { value: '124' }
      });
    })
    expect(screen.getByTestId('value-elem')).toContainHTML('124');

    act(() => {
      userEvent.type(input, '464624524574537');
    })
    expect(screen.getByTestId('value-elem')).toContainHTML('464624524574537');
  });
})
