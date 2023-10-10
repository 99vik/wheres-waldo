import { API_URL } from './API_URL';

async function createSession() {
  const API_path = `${API_URL}session`;
  const response = await fetch(API_path, {
    method: 'POST',
  });
  return response.json();
}

async function destroySession(sessionID) {
  const API_path = `${API_URL}session/${sessionID}`;

  await fetch(API_path, {
    method: 'DELETE',
  });
}

export { createSession, destroySession };
