import { fetchWithCustomHeadersAndParams } from './requires.js';
import axios from 'axios';
jest.mock('axios');
test('correctly includes custom headers and params', async () => {
  axios.get.mockResolvedValue({ data: { success: true } });
  const response = await fetchWithCustomHeadersAndParams();
  expect(axios.get).toHaveBeenCalledWith(
    'https://lms.ithilel.ua',
    expect.objectContaining({
      headers: {
        'Authorization': 'Bearer token',
        'Custom-Header': 'value',
      },
      params: {
        page: 1,
        limit: 5,
      },
    })
  );
  expect(response).toEqual({ success: true });
});






