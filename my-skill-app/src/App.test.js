import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import App from './App';

// These tests cover application behavior, not Leaflet layout or network tiles.
jest.mock('./components/SkillsMap', () => () => <div>Map preview</div>);

const originalFetch = global.fetch;

const waitForSampleData = () => waitFor(() => {
  const summary = screen.getByRole('heading', { name: 'Total Skills' }).parentElement;
  expect(within(summary).getByText('1')).toBeInTheDocument();
});

beforeEach(() => {
  sessionStorage.clear();
  global.fetch = jest.fn().mockResolvedValue({
    json: async () => ({ users: [{
      id: 1, name: 'Demo Teacher',
      location: { lat: -33.86, long: 151.2 },
      skills: [{ name: 'Guitar' }], interests: [],
    }] }),
  });
});

afterEach(() => {
  global.fetch = originalFetch;
});

test('loads sample skills and searches by title', async () => {
  render(<App />);
  expect(screen.getByText('Learn something with someone')).toBeInTheDocument();
  await waitForSampleData();
  fireEvent.change(screen.getByPlaceholderText('What skills do you want to learn?'), {
    target: { value: 'guitar' },
  });
  fireEvent.click(screen.getByRole('button', { name: 'Search' }));
  expect(screen.getByRole('heading', { name: 'Search Results' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Guitar' })).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledWith('/data.json');
});

test('shows an empty result and returns home', async () => {
  render(<App />);
  await waitForSampleData();
  fireEvent.change(screen.getByPlaceholderText('What skills do you want to learn?'), {
    target: { value: 'nonexistent skill' },
  });
  fireEvent.click(screen.getByRole('button', { name: 'Search' }));
  expect(screen.getByText(/No matching skills found/)).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /Back to Home/ }));
  expect(screen.getByPlaceholderText('What skills do you want to learn?')).toHaveValue('');
});

test('opens the guest account controls', async () => {
  render(<App />);
  await waitForSampleData();
  fireEvent.click(screen.getByRole('button', { name: 'Open user menu' }));
  expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Register' })).toBeInTheDocument();
});
