import { fetchWithCustomHeadersAndParams } from './requires.js';
import axios from 'axios';
jest.mock('axios');
test('handles error from mocked API', async () => {
  axios.get.mockRejectedValue(new Error('Request failed'));
  const errorMessage = await fetchWithCustomHeadersAndParams();
  expect(errorMessage).toMatch(/Error:/);
  expect(errorMessage).toMatch(/Request failed/);
});