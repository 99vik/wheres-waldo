import { API_URL } from './API_URL';

async function checkClickPosition(title, character, coordinates) {
  const x = Math.round(coordinates.x * 100);
  const y = Math.round(coordinates.y * 100);
  const API_path = `${API_URL}check_position/${title}/${character}/coordiates?x=${x}&y=${y}`;
  const response = await fetch(API_path);
  return response.json();
}

export default checkClickPosition;
