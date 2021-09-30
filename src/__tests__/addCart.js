import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import App from '../App';

test('Add cart functionality', async () => {
  render(<App />)

  fireEvent.click(screen.getByText('Add to Cart'));
  fireEvent.click(screen.getByText('Add to Cart'));
  fireEvent.click(screen.getByText('Add to Cart'));

  await waitFor(() => screen.getByTestId('cartCount'));

  expect(screen.getByTestId('cartCount')).toHaveTextContent('3');
})