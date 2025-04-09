import axios from 'axios';
export async function fetchWithCustomHeadersAndParams() {
  try {
    const response = await axios.get('https://lms.ithilel.ua', {
      headers: {
        'Authorization': 'Bearer token',
        'Custom-Header': 'value',
      },
      params: {
        page: 1,
        limit: 5,
      },
    });
    return response.data;
  } catch (error) {
    return `Error: ${error.message}`;
  }
}






