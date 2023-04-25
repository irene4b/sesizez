import generateIntroduction from '../reusables/generateIntroduction';
import generateSignature from '../reusables/generateSignature';
import { getAuthoritiesEmails } from '../reusables/getAuthoritiesEmails';
import { reportedLocation, userPersonalData } from '../types';

const instalareParcariBiciclete = {
  title: 'Cerere instalare parcări pentru biciclete',
  generator: async (personal: userPersonalData, location: reportedLocation) => {
    const introduction = generateIntroduction(personal);
    const signature = generateSignature(personal);
    return (
      `${introduction}\n\n` +
      `Vă adresez această cerere cu privire la instalarea de parcări pentru biciclete în zona ${location.adresaLinie1}, în apropierea clădirilor publice, stațiilor de transport în comun și a centrelor comerciale.\n\n` +
      `Am observat că numărul de bicicliști în zonă este în creștere, însă facilitățile de parcare pentru biciclete sunt insuficiente. Acest lucru poate descuraja utilizarea bicicletelor ca mijloc de transport, iar bicicletele parcate neregulamentar pot cauza blocaje sau pot reprezenta un pericol pentru pietoni și alți utilizatori ai infrastructurii.\n\n` +
      `Consider că instalarea unor parcări pentru biciclete ar aduce următoarele beneficii:\n` +
      `- Încurajarea utilizării bicicletelor ca mijloc de transport ecologic și sănătos\n` +
      `- Reducerea traficului auto și a poluării în zonă\n` +
      `- Creșterea siguranței bicicliștilor și a pietonilor\n` +
      `- Imbunătățirea aspectului estetic al zonei\n\n` +
      `Crearea de infrastructură sigură pentru biciclete nu numai că va îmbunătăți siguranța tuturor participanților la trafic, dar va contribui și la reducerea semnificativă a traficului rutier, care este deja o problemă majoră în orașul nostru.\n\n` +
      `Vă rog să luați în considerare această cerere și să evaluați posibilitatea de a instala parcări pentru biciclete în locațiile menționate. Vă mulțumesc anticipat pentru atenția acordată acestei probleme și aștept cu interes răspunsul dumneavoastră.\n\n` +
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

export default instalareParcariBiciclete;
