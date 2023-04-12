import generateOSMLink from '../reusables/generateOSMLink';
import generateIntroduction from '../reusables/generateIntroduction';
import generateSignature from '../reusables/generateSignature';
import { getAuthoritiesEmails } from '../reusables/getAuthoritiesEmails';
import { reportedLocation, userPersonalData } from '../types';

const masinaAccidentataAbandonata = {
  title: 'Mașină accidentată abandonată',
  generator: (personal: userPersonalData, location: reportedLocation) => {
    const introduction = generateIntroduction(personal);
    const googleMapsLink = generateOSMLink(location.lat, location.lng);
    const signature = generateSignature(personal);
    return (
      `${introduction}\n\n` +
      `Vă adresez această sesizare pentru a vă informa despre o problemă legată de o mașină accidentată abandonată în apropierea ${location.adresaLinie1}, link harta: ${googleMapsLink}\n\n` +
      `Vehiculul accidentat se află pe trotuar sau într-un loc de parcare și creează probleme de curățenie, siguranță și accesibilitate pentru pietoni și ceilalți participanți la trafic. Situația actuală se poate vedea și în pozele atașate.\n\n` +
      `Vă solicit să luați măsurile necesare pentru a remedia această problemă, inclusiv:\n\n` +
      `- identificarea proprietarului vehiculului și notificarea acestuia cu privire la situație\n` +
      `- în cazul în care proprietarul nu îndepărtează mașina într-un termen rezonabil, luarea măsurilor legale pentru ridicarea și depozitarea vehiculului\n` +
      `- asigurarea curățeniei și siguranței zonei după îndepărtarea mașinii accidentate\n\n` +
      `${signature}`
    );
  },
  destination: (localitate: string, judet: string) => {
    return getAuthoritiesEmails(localitate, judet, 'politiaLocala primarie');
  },
};

export default masinaAccidentataAbandonata;
