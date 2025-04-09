import { fetchFromInvalidURL } from './api.js';
import axios from 'axios';
jest.mock('axios');
test('handles error from invalid URL', async () => {
  axios.get.mockRejectedValue(new Error('Invalid URL'));
  const errorMessage = await fetchFromInvalidURL();
  expect(errorMessage).toMatch(/Invalid URL/);
}, 10000);  



