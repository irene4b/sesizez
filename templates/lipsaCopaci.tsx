import generateOSMLink from '../reusables/generateOSMLink';
import generateIntroduction from '../reusables/generateIntroduction';
import generateSignature from '../reusables/generateSignature';
import { getAuthoritiesEmails } from '../reusables/getAuthoritiesEmails';
import { reportedLocation, userPersonalData } from '../types';

const lipsaCopaci = {
  title: 'Lipsa copaci pe străzi',
  generator: async (personal: userPersonalData, location: reportedLocation) => {
    const introduction = generateIntroduction(personal);
    const googleMapsLink = await generateOSMLink(location.lat, location.lng);
    const signature = generateSignature(personal);
    return (
      `${introduction}\n\n` +
      `Vă scriu în legătură cu lipsa copacilor pe străzile din zona ${location.adresaLinie1}, link hartă: ${googleMapsLink}\n\n` +
      `Copacii sunt esențiali într-un oraș din mai multe motive, printre care:\n\n` +
      `- Minimizarea zgomotului: copacii ajută la reducerea zgomotului urban\n` +
      `- Minimizarea poluării: copacii absorb poluanții și eliberează oxigen\n` +
      `- Reducerea temperaturii pe timp de vară: copacii creează umbră și au un efect de răcire în zilele călduroase\n` +
      `- Creșterea biodiversității: copacii găzduiesc o varietate de specii de animale și plante\n\n` +
      `Vă solicit să luați în considerare plantarea de copaci în zona menționată, pentru a oferi cetățenilor un mediu mai sănătos și plăcut. Aceasta poate include:\n\n` +
      `- Plantarea de copaci în locurile disponibile pe trotuare și în parcuri\n` +
      `- Încurajarea comunității locale să planteze copaci pe proprietățile lor\n` +
      `- Implementarea unor programe de educare și conștientizare cu privire la importanța copacilor în mediul urban\n\n` +
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

export default lipsaCopaci;
