import generateOSMLink from '../reusables/generateOSMLink';
import generateIntroduction from '../reusables/generateIntroduction';
import generateSignature from '../reusables/generateSignature';
import { getAuthoritiesEmails } from '../reusables/getAuthoritiesEmails';
import { reportedLocation, userPersonalData } from '../types';

const iluminatStradalInsuficientSauDefect = {
  title: 'Iluminat stradal insuficient sau defect',
  generator: (personal: userPersonalData, location: reportedLocation) => {
    const introduction = generateIntroduction(personal);
    const googleMapsLink = generateOSMLink(location.lat, location.lng);
    const signature = generateSignature(personal);
    return (
      `${introduction}\n\n` +
      `Vă adresez această sesizare pentru a vă informa despre o problemă legată de iluminatul stradal în apropierea ${location.adresaLinie1}, link harta: ${googleMapsLink}\n\n` +
      `Mai multe becuri stradale nu funcționează sau luminează insuficient, ceea ce creează o atmosferă nesigură și întunecată în zonă. Această problemă poate duce la accidente, infracțiuni și un sentiment general de insecuritate pentru cetățeni.\n\n` +
      `Vă solicit să luați măsurile necesare pentru a remedia această problemă, inclusiv:\n\n` +
      `- înlocuirea becurilor defecte sau ardere cu unele noi și eficiente\n` +
      `- verificarea și repararea instalațiilor electrice dacă este necesar\n` +
      `- evaluarea necesității de a adăuga mai multe becuri stradale pentru a îmbunătăți iluminatul în zonă\n\n` +
      `${signature}`
    );
  },
  destination: (localitate: string, judet: string) => {
    return getAuthoritiesEmails(localitate, judet, 'primarie adp administratiaStrazilor');
  },
};

export default iluminatStradalInsuficientSauDefect;
