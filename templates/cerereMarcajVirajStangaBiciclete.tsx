import generateOSMLink from '../reusables/generateOSMLink';
import generateIntroduction from '../reusables/generateIntroduction';
import generateSignature from '../reusables/generateSignature';
import { getAuthoritiesEmails } from '../reusables/getAuthoritiesEmails';
import { reportedLocation, userPersonalData } from '../types';

const cerereMarcajVirajStangaBiciclete = {
  title: 'Cerere marcaj viraj stânga biciclete',
  generator: async (personal: userPersonalData, location: reportedLocation) => {
    const introduction = generateIntroduction(personal);
    const googleMapsLink = await generateOSMLink(location.lat, location.lng);
    const signature = generateSignature(personal);

    return (
      `${introduction}\n\n` +
      `Vă scriu în legătură cu necesitatea unui marcaj pentru virajul la stânga destinat bicicletelor la intersecția semaforizată situată la ${location.adresaLinie1}, link hartă: ${googleMapsLink}\n\n` +
      `Sute de bicicliști încearcă zilnic să vireze la stânga în această intersecție, iar lipsa marcajelor corespunzătoare face acest lucru dificil și periculos din cauza traficului de mașini. O soluție eficientă și sigură ar fi marcajul dedicat bicicletelor pentru viratul la stânga, însoțit de un semafor dedicat, sincronizat cu semaforul de mers înainte al mașinilor (în prima fază) și apoi cu cel de mers înainte al străzii perpendiculare (în a doua fază). Un exemplu potrivit poate fi găsit aici: https://i.imgur.com/72IfpRG.png\n\n` +
      `Crearea de infrastructură sigură pentru biciclete nu numai că va îmbunătăți siguranța tuturor participanților la trafic, dar va contribui și la reducerea semnificativă a traficului rutier, care este deja o problemă majoră în orașul nostru.\n\n` +
      `Solicit implementarea acestei soluții în intersecția menționată, precum și evaluarea altor intersecții semaforizate din oraș pentru a determina dacă un marcaj similar ar putea îmbunătăți siguranța și fluiditatea traficului pentru bicicliști.\n\n` +
      `${signature}`
    );
  },
  destination: (localitate: string, judet: string) => {
    return getAuthoritiesEmails(
      localitate,
      judet,
      'primarie adp administratiaStrazilor'
    );
  },
};

export default cerereMarcajVirajStangaBiciclete;
