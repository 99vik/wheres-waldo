import { API_URL } from './API_URL';

async function checkClickPosition(character, coordinates) {
  // const API_path = `${API_URL}check_position/?characte=${character}&coordinates=${coordinates}`;
  const API_path = `${API_URL}/123`;
  console.log(character);
  console.log(coordinates);
  // const response = await fetch(API_path, {
  //   mode: 'no-cors'
  // });
  const response = await fetch(API_path);
  return response.json();
}

export default checkClickPosition;
