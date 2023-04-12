import generateOSMLink from '../reusables/generateOSMLink';
import generateIntroduction from '../reusables/generateIntroduction';
import generateSignature from '../reusables/generateSignature';
import { getAuthoritiesEmails } from '../reusables/getAuthoritiesEmails';
import { reportedLocation, userPersonalData } from '../types';

const poluareAerZoneRezidentiale = {
  title: 'Poluare aer în zone rezidențiale',
  generator: (personal: userPersonalData, location: reportedLocation) => {
    const introduction = generateIntroduction(personal);
    const googleMapsLink = generateOSMLink(location.lat, location.lng);
    const signature = generateSignature(personal);
    return (
      `${introduction}\n\n` +
      `Vă adresez această sesizare pentru a semnala probleme de poluare a aerului în zona rezidențială situată în apropierea ${location.adresaLinie1}, link harta: ${googleMapsLink}. Această problemă afectează calitatea vieții locuitorilor și poate avea efecte negative asupra sănătății lor.\n\n` +
      `Principalele surse de poluare a aerului sunt:\n\n` +
      `- traficul intens de mașini și vehicule grele\n` +
      `- activități industriale și de construcții în apropiere\n` +
      `- arderea deșeurilor sau materiale în aer liber\n\n` +
      `Pentru a combate această problemă, vă solicit să luați următoarele măsuri:\n\n` +
      `- monitorizarea și controlul nivelurilor de poluare a aerului în zona rezidențială sau publică\n` +
      `- impunerea unor restricții de trafic sau ore de circulație pentru vehiculele grele\n` +
      `- reglementarea activităților de construcții și industriale pentru a limita emisiile poluante\n` +
      `- aplicarea unor sancțiuni pentru persoanele care ard deșeuri sau materiale în aer liber\n\n` +
      `Vă rog să analizați această situație și să luați măsuri pentru a reduce poluarea aerului în zona rezidențială sau publică menționată.\n\n` +
      `${signature}`
    );
  },
  destination: (localitate: string, judet: string) => {
    return getAuthoritiesEmails(localitate, judet, 'primarie politiaLocala anpm');
  },
};

export default poluareAerZoneRezidentiale;
