import generateGoogleMapsLink from "../reusables/generateGoogleMapsLink";
import generateSignature from "../reusables/generateSignature";
import { reportedLocation, userPersonalData } from "../types";

const model = {
  title: 'Model Sesizare',
  generator: (personal: userPersonalData, location: reportedLocation) => {
    const googleMapsLink = generateGoogleMapsLink(location.lat, location.lng);
    const signature = generateSignature(personal);
    return `${googleMapsLink}\n\n${signature}`;
  },
  destination: (localitate: string, judet: string) => {
    switch (`${localitate} - ${judet}`) {
      case 'București - Sector 1':
        return ['mail@sector1.com'];
      case 'București - Sector 2':
        return ['mail@sector2.com'];
      case 'București - Sector 3':
        return ['mail@sector3.com'];
      case 'București - Sector 4':
        return ['mail@sector4.com'];
      case 'București - Sector 5':
        return ['mail@sector5.com'];
      case 'București - Sector 6':
        return ['mail@sector6.com'];
      default: return [];
    }
  }
}

export default model;