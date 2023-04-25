import generateIntroduction from '../reusables/generateIntroduction';
import generateSignature from '../reusables/generateSignature';
import { getAuthoritiesEmails } from '../reusables/getAuthoritiesEmails';
import { reportedLocation, userPersonalData } from '../types';

const imbunatatireIntersectiiPisteBiciclete = {
  title: 'Cerere îmbunătățire intersecții cu piste de biciclete',
  generator: async (personal: userPersonalData, location: reportedLocation) => {
    const introduction = generateIntroduction(personal);
    const signature = generateSignature(personal);
    return (
      `${introduction}\n\n` +
      `Vă adresez această cerere pentru a atrage atenția asupra problemelor legate de siguranța intersecțiilor cu piste de biciclete în zona ${location.adresaLinie1}. Observ că intersecțiile respective nu dispun de marcaje adecvate pentru biciclete, iar înălțimea intersecției nu este la nivelul trotuarului, ceea ce crește riscul accidentelor pentru bicicliști, pietoni și șoferi.\n\n` +
      `Consider că îmbunătățirea intersecțiilor cu piste de biciclete ar aduce următoarele beneficii:\n` +
      `- Creșterea siguranței pentru bicicliști, pietoni și șoferi\n` +
      `- Reducerea riscului de accidente în intersecții\n` +
      `- Încurajarea utilizării bicicletelor ca mijloc de transport ecologic și sănătos\n\n` +
      `Propun următoarele măsuri pentru îmbunătățirea intersecțiilor cu piste de biciclete:\n` +
      `- Ridicarea intersecțiilor la nivelul trotuarului, pentru a asigura o vizibilitate mai bună și o trecere mai sigură pentru bicicliști și pietoni\n` +
      `- Adăugarea de marcaje pentru biciclete, inclusiv marcaje de virat la stânga, precum cele din exemplul ${'https://i.imgur.com/72IfpRG.png'}\n\n` +
      `Vă rog să luați în considerare aceste propuneri și să analizați posibilitatea de a implementa aceste îmbunătățiri în intersecțiile cu piste de biciclete din zona menționată. Vă mulțumesc anticipat pentru atenția acordată acestei probleme și aștept cu interes răspunsul dumneavoastră.\n\n` +
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

export default imbunatatireIntersectiiPisteBiciclete;
