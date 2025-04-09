import axios from 'axios';
export async function fetchFromInvalidURL() {
  try {
    await axios.get('https://invalid_url.test.com'); 
  } catch (error) {
    return `Error: ${error.message}`;
  }
}
