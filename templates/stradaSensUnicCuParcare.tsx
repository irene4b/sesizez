import generateOSMLink from '../reusables/generateOSMLink';
import generateIntroduction from '../reusables/generateIntroduction';
import generateSignature from '../reusables/generateSignature';
import { getAuthoritiesEmails } from '../reusables/getAuthoritiesEmails';
import { reportedLocation, userPersonalData } from '../types';

const stradaSensUnicCuParcare = {
  title: 'Stradă îngustă: cerere sens unic și parcări',
  generator: (personal: userPersonalData, location: reportedLocation) => {
    const introduction = generateIntroduction(personal);
    const googleMapsLink = generateOSMLink(location.lat, location.lng);
    const signature = generateSignature(personal);
    return (
      `${introduction}\n\n` +
      `Vă adresez această sesizare pentru a solicita transformarea străzii înguste cu două benzi situată în apropierea ${location.adresaLinie1}, link harta: ${googleMapsLink}, într-o stradă cu sens unic, cu parcare pe ambele sensuri.\n\n` +
      `În prezent, mașinile parchează pe trotuare, forțând pietonii să-și pună viața în pericol, în special pietonii vulnerabili, cum ar fi părinții cu cărucioare de copii și persoanele cu dizabilități motorii. Circulația este inconfortabilă și pentru șoferi, care sunt obligați să dea cu spatele atunci când se întâlnesc cu un vehicul venind din sens opus.\n\n` +
      `Vă solicit să analizați posibilitatea de a transforma această stradă într-o stradă cu sens unic, cu parcare pe ambele sensuri, pentru a rezolva următoarele probleme:\n\n` +
      `- creșterea siguranței și accesibilității pentru pietoni\n` +
      `- îmbunătățirea condițiilor de circulație pentru șoferi\n` +
      `- reducerea riscului de accidente cauzate de întâlnirea cu vehicule venind din sens opus\n` +
      `- asigurarea unor locuri de parcare adecvate, fără a bloca trotuarele\n\n` +
      `Sunt convins că această modificare va aduce beneficii considerabile comunității și va contribui la îmbunătățirea calității vieții locuitorilor.\n\n` +
      `${signature}`
    );
  },
  destination: (localitate: string, judet: string) => {
    return getAuthoritiesEmails(localitate, judet, 'primarie administratiaStrazilor');
  },
};

export default stradaSensUnicCuParcare;
