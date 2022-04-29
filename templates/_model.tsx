import generateOSMLink from '../reusables/generateOSMLink';
import generateIntroduction from '../reusables/generateIntroduction';
import generateSignature from '../reusables/generateSignature';
import { reportedLocation, userPersonalData } from '../types';

const model = {
  title: 'Model Sesizare',
  generator: (personal: userPersonalData, location: reportedLocation) => {
    const introduction = generateIntroduction(personal);
    const googleMapsLink = generateOSMLink(location.lat, location.lng);
    const signature = generateSignature(personal);
    return `${introduction}, ${googleMapsLink}\n\n${signature}`;
  },
  destination: (localitate: string, judet: string) => {
    switch (`${localitate} - ${judet}`) {
      case 'Bucharest - Sector 1':
        return ['contact@politialocalasector1.ro', 'bpr@b.politiaromana.ro'];
      case 'Bucharest - Sector 2':
        return ['office@politialocalas2.ro', 'bpr@b.politiaromana.ro'];
      case 'Bucharest - Sector 3':
        return ['secretariat@politialocala3.ro', 'bpr@b.politiaromana.ro'];
      case 'Bucharest - Sector 4':
        return ['sesizari@politialocala4.ro', 'bpr@b.politiaromana.ro'];
      case 'Bucharest - Sector 5':
        return ['politialocala@sector5.ro', 'bpr@b.politiaromana.ro'];
      case 'Bucharest - Sector 6':
        return ['office@politia6.ro', 'bpr@b.politiaromana.ro'];
      default:
        return [];
    }
  },
};

export default model;
