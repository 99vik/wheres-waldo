import { API_URL } from './API_URL';

async function getSession(id) {
  const API_path = `${API_URL}session/${id}`;
  const response = await fetch(API_path);
  return response.json();
}

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

export { createSession, destroySession, getSession };
