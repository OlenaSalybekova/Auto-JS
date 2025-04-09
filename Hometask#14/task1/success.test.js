import { fetchWithCustomHeadersAndParams } from './requires.js';
import axios from 'axios';
jest.mock('axios');
test('successful response from mocked API', async () => {
  axios.get.mockResolvedValue({ data: { success: true } });
  const response = await fetchWithCustomHeadersAndParams();
  expect(response).toEqual({ success: true });
});

