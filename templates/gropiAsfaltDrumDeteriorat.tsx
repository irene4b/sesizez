import generateOSMLink from '../reusables/generateOSMLink';
import generateIntroduction from '../reusables/generateIntroduction';
import generateSignature from '../reusables/generateSignature';
import { getAuthoritiesEmails } from '../reusables/getAuthoritiesEmails';
import { reportedLocation, userPersonalData } from '../types';

const gropiAsfaltDrumDeteriorat = {
  title: 'Gropi în asfalt/drum deteriorat',
  generator: (personal: userPersonalData, location: reportedLocation) => {
    const introduction = generateIntroduction(personal);
    const googleMapsLink = generateOSMLink(location.lat, location.lng);
    const signature = generateSignature(personal);
    return (
      `${introduction}\n\n` +
      `Vă adresez această sesizare pentru a vă informa despre o problemă legată de gropile în asfalt și drumul deteriorat în apropierea ${location.adresaLinie1}, link harta: ${googleMapsLink}\n\n` +
      `Starea actuală a drumului cauzează pericole și daune vehiculelor, de asemenea, crește riscul de accidente și alte probleme de trafic. Situația curentă se poate vedea și în pozele atașate.\n\n` +
      `Vă solicit să luați măsurile necesare pentru a remedia această problemă, inclusiv:\n\n` +
      `- nivelarea și repararea gropilor și denivelărilor de pe drum\n` +
      `- evaluarea necesității de a reconstrui sau resurfata întregul segment de drum pentru a preveni reapariția problemelor\n` +
      `- asigurarea unei întrețineri regulate a drumului pentru a menține siguranța și confortul șoferilor și pietonilor\n\n` +
      `${signature}`
    );
  },
  destination: (localitate: string, judet: string) => {
    return getAuthoritiesEmails(localitate, judet, 'primarie administratiaStrazilor');
  },
};

export default gropiAsfaltDrumDeteriorat;
