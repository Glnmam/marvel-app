import './style.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);

  const h1Element = screen.getByRole('heading', { level: 1, name: "Marvel App" });
  expect(h1Element).toBeInTheDocument();
});

import routes from './routes';

// Create a router that uses the client side history strategy for
const router = createBrowserRouter(routes)

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;