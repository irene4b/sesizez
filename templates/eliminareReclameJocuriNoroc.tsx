import generateOSMLink from '../reusables/generateOSMLink';
import generateIntroduction from '../reusables/generateIntroduction';
import generateSignature from '../reusables/generateSignature';
import { getAuthoritiesEmails } from '../reusables/getAuthoritiesEmails';
import { reportedLocation, userPersonalData } from '../types';

const eliminareReclameJocuriNoroc = {
  title: 'Eliminare reclame jocuri de noroc',
  generator: async (personal: userPersonalData, location: reportedLocation) => {
    const introduction = generateIntroduction(personal);
    const googleMapsLink = await generateOSMLink(location.lat, location.lng);
    const signature = generateSignature(personal);
    return (
      `${introduction}\n\n` +
      `Vă scriu în legătură cu reclamele la jocuri de noroc și pariuri sportive din cartierul nostru, în special în zona ${location.adresaLinie1}, link harta: ${googleMapsLink}\n\n` +
      `În ciuda faptului că aceste reclame sunt legale, acestea afectează negativ imaginea și atmosfera cartierului și contribuie la promovarea jocurilor de noroc în rândul tinerilor și al locuitorilor cartierului în general. Efectele nocive ale jocurilor de noroc includ:\n\n` +
      `- Creșterea riscului de dependență\n` +
      `- Probleme financiare și datorii\n` +
      `- Relații interpersonale deteriorate\n` +
      `- Impact negativ asupra sănătății mentale\n\n` +
      `Mai mult de 160,000 de oameni au semnat pentru interzicerea reclamelor la jocuri de noroc și pariuri sportive în următoarea petiție: https://facem.declic.ro/campaigns/interziceti-reclamele-la-jocuri-de-noroc-pariuri-sportive\n\n` +
      `Eliminarea acestor reclame ar avea efecte pozitive, cum ar fi:\n\n` +
      `- Reducerea expunerii la jocurile de noroc în rândul tinerilor și al comunității în general\n` +
      `- Crearea unui mediu mai sănătos și liniștit în cartier\n` +
      `- Promovarea unui stil de viață responsabil și echilibrat\n\n` +
      `În calitate de cetățean preocupat, vă rog să luați în considerare eliminarea acestor bannere publicitare din cartierul nostru și să căutați alternative mai potrivite pentru a menține un mediu sănătos și liniștit pentru locuitori.\n\n` +
      `${signature}`
    );
  },
  destination: (localitate: string, judet: string) => {
    return getAuthoritiesEmails(localitate, judet, 'primarie');
  },
};

export default eliminareReclameJocuriNoroc;
