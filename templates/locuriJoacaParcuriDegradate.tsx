import generateOSMLink from '../reusables/generateOSMLink';
import generateIntroduction from '../reusables/generateIntroduction';
import generateSignature from '../reusables/generateSignature';
import { getAuthoritiesEmails } from '../reusables/getAuthoritiesEmails';
import { reportedLocation, userPersonalData } from '../types';

const locuriJoacaParcuriDegradate = {
  title: 'Locuri de joacă și parcuri degradate',
  generator: (personal: userPersonalData, location: reportedLocation) => {
    const introduction = generateIntroduction(personal);
    const googleMapsLink = generateOSMLink(location.lat, location.lng);
    const signature = generateSignature(personal);
    return (
      `${introduction}\n\n` +
      `Vă adresez această sesizare pentru a vă informa despre o problemă legată de locurile de joacă și parcurile degradate sau nesigure în apropierea ${location.adresaLinie1}, link harta: ${googleMapsLink}\n\n` +
      `Echipamentele de joacă sunt deteriorate, iar unele zone ale parcului prezintă pericole pentru siguranța copiilor și a adulților. Situația actuală se poate vedea și în pozele atașate.\n\n` +
      `Vă solicit să luați măsurile necesare pentru a remedia această problemă, inclusiv:\n\n` +
      `- înlocuirea sau repararea echipamentelor de joacă deteriorate\n` +
      `- eliminarea oricăror pericole sau obstacole care pot provoca accidente în parc\n` +
      `- asigurarea unei întrețineri regulate a parcului pentru a menține siguranța și curățenia\n` +
      `- evaluarea necesității de a adăuga mai multe facilități sau echipamente în parc pentru a îmbunătăți experiența vizitatorilor\n\n` +
      `${signature}`
    );
  },
  destination: (localitate: string, judet: string) => {
    return getAuthoritiesEmails(localitate, judet, 'primarie');
  },
};

export default locuriJoacaParcuriDegradate;
