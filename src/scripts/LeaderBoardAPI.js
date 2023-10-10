import { API_URL } from './API_URL';

async function createRecord(formData) {
  const data = { player_record: formData };
  const response = await fetch(`${API_URL}/player_record`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  console.log(response);
}

export { createRecord };
