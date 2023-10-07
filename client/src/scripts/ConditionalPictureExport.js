import BeachImg from '../assets/images/beach.jpg';
import SkiSlopesImg from '../assets/images/ski_slopes.jpg';
import OlympicStadiumImg from '../assets/images/olympic_stadium.jpg';

function GetPicture(title) {
  switch (title) {
    case 'olympic_stadium':
      return OlympicStadiumImg;
    case 'ski_slopes':
      return SkiSlopesImg;
    case 'beach':
      return BeachImg;
  }
}

export default GetPicture;
