import generateOSMLink from '../reusables/generateOSMLink';
import generateIntroduction from '../reusables/generateIntroduction';
import generateSignature from '../reusables/generateSignature';
import { getAuthoritiesEmails } from '../reusables/getAuthoritiesEmails';
import { reportedLocation, userPersonalData } from '../types';

const lipsaPistaBicicleteSensGiratoriu = {
  title: 'Lipsa pistă biciclete în sens giratoriu',
  generator: async (personal: userPersonalData, location: reportedLocation) => {
    const introduction = generateIntroduction(personal);
    const googleMapsLink = await generateOSMLink(location.lat, location.lng);
    const signature = generateSignature(personal);

    return (
      `${introduction}\n\n` +
      `Vă scriu în legătură cu lipsa unei piste pentru biciclete în sensul giratoriu situat la ${location.adresaLinie1}, link hartă: ${googleMapsLink}\n\n` +
      `În prezent, pista de biciclete existentă se termină la începutul sensului giratoriu, ceea ce pune în pericol viața bicicliștilor care sunt nevoiți să intre în sensul giratoriu fără marcaje corespunzătoare pentru biciclete. Alternativa, de a continua pe trotuar (ceea ce se întâmplă adesea în această zonă, deși este interzis), poate pune în pericol pietonii.\n\n` +
      `Vă rog să luați în considerare implementarea unor soluții similare cu cele prezentate în manualul de urbanistică al orașului Oslo, pagina 171 (https://i.imgur.com/943ULLX.png), care oferă soluții de infrastructură sigură pentru bicicliști în astfel de situații. Manualul complet poate fi găsit la următorul link: https://is.gd/3XGp3O\n\n` +
      `Crearea de infrastructură sigură pentru biciclete nu numai că va îmbunătăți siguranța tuturor participanților la trafic, dar va contribui și la reducerea semnificativă a traficului rutier, care este deja o problemă majoră în orașul nostru.\n\n` +
      `Solicit realizarea unei piste de biciclete în sensul giratoriu în cauză, precum și revizuirea altor sensuri giratorii din oraș pentru a evalua necesitatea implementării unor astfel de soluții.\n\n` +
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

export default lipsaPistaBicicleteSensGiratoriu;
