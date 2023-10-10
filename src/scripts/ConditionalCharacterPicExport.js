import WaldoPic from '../assets/images/waldo.png';
import WendaPic from '../assets/images/wenda.png';
import OdlawPic from '../assets/images/odlaw.png';
import WizzardPic from '../assets/images/wizzard.png';
import WoofPic from '../assets/images/woof.png';

function GetCharacterPicture(character) {
  switch (character) {
    case 'waldo':
      return WaldoPic;
    case 'wenda':
      return WendaPic;
    case 'odlaw':
      return OdlawPic;
    case 'wizzard':
      return WizzardPic;
    case 'woof':
      return WoofPic;
  }
}

export default GetCharacterPicture;
