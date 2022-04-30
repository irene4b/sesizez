import generateOSMLink from '../reusables/generateOSMLink';
import generateIntroduction from '../reusables/generateIntroduction';
import generateSignature from '../reusables/generateSignature';
import { model, reportedLocation, userPersonalData } from '../types';
import { getAuthoritiesEmails } from '../reusables/getAuthoritiesEmails';

const transportPublicBlocatTrafic: model = {
  title: 'Trafic intens ce blochează transportul în comun',
  generator: (personal: userPersonalData, location: reportedLocation) => {
    const introduction = generateIntroduction(personal);
    const googleMapsLink = generateOSMLink(location.lat, location.lng);
    const signature = generateSignature(personal);
    return `${introduction}\n\n` + 
      `Vă scriu în legătură cu traficul intens din apropierea ${location.adresaLinie1} la orele de vârf, care afectează în special sutele (sau chiar miile) de oameni ce călătoresc cu modalitățile de transport în comun din zonă.\n\n` +
      `Pentru a incuraja oamenii să călătorească cu serviciile de transport în comun, fapt ce ar duce atât la reducerea traficului cât și la reducerea poluării din aerul pe care noi și copiii noștri îl respirăm, doresc următoarele:\n\n` +
      `- crearea unei benzi de circulație dedicată transportului în comun (autobuz, troleibuz, taxi, rideshare),\n` +
      `- separarea benzii de circulație cu stâlpi pentru a bloca accesul mașinilor personale, \n` +
      `- montarea la intersecții a semafoarelor smart ce prioritizează traficul în funcție de numărul de persoane (nu de vehicule) din fiecare sens (exemplu: https://www.youtube.com/watch?v=knbVWXzL4-4 )\n\n` +
      `Link locație: ${googleMapsLink}\n\n` +
      `Vă pun la dispoziție următoarele materiale ce dovedesc eficacitatea cererilor de mai sus:\n` +
      `https://uk-air.defra.gov.uk/assets/documents/reports/cat05/1004010934_MeasurementvsEmissionsTrends.pdf\n` +
      `https://crowdsourced-transport.com/working-pages/improve-public-transport/traffic-signal-priority/\n\n` + 
      `${signature}`;
  },
  destination: (localitate: string, judet: string) => {
    return getAuthoritiesEmails(localitate, judet, 'politiaLocala primarie administratiaStrazilor transportDeSuprafata');
  }
};

export default transportPublicBlocatTrafic;
