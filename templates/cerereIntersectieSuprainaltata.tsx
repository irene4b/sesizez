import generateOSMLink from '../reusables/generateOSMLink';
import generateIntroduction from '../reusables/generateIntroduction';
import generateSignature from '../reusables/generateSignature';
import { getAuthoritiesEmails } from '../reusables/getAuthoritiesEmails';
import { reportedLocation, userPersonalData } from '../types';

const cerereIntersectieSuprainaltata = {
  title: 'Cerere intersecție supraînălțată',
  generator: (personal: userPersonalData, location: reportedLocation) => {
    const introduction = generateIntroduction(personal);
    const googleMapsLink = generateOSMLink(location.lat, location.lng);
    const signature = generateSignature(personal);
    return (
      `${introduction}\n\n` +
      `Vă adresez această cerere pentru a solicita construirea unei intersecții supraînălțate în apropierea ${location.adresaLinie1}, link harta: ${googleMapsLink}\n\n` +
      `Intersecțiile supraînălțate oferă multiple beneficii pentru siguranța pietonilor și accesibilitatea persoanelor cu dizabilități motorii, precum și pentru părinții care transportă copii în cărucioare. Aceste intersecții reduc viteza vehiculelor, îmbunătățesc vizibilitatea și facilitează traversarea străzii în siguranță.\n\n` +
      `Vă solicit să luați în considerare construirea unei intersecții supraînălțate în zona menționată, ținând cont de următoarele beneficii:\n\n` +
      `- îmbunătățirea siguranței pietonilor prin reducerea vitezei vehiculelor\n` +
      `- creșterea vizibilității pietonilor și șoferilor\n` +
      `- facilitarea accesului pentru persoanele cu dizabilități motorii și părinții care transportă copii în cărucioare\n` +
      `- încurajarea traversării străzii în siguranță și în mod responsabil\n\n` +
      `Sunt convins că investiția într-o intersecție supraînălțată în această zonă va aduce beneficii considerabile comunității și va contribui la creșterea calității vieții locuitorilor.\n\n` +
      `${signature}`
    );
  },
  destination: (localitate: string, judet: string) => {
    return getAuthoritiesEmails(localitate, judet, 'primarie administratiaStrazilor adp');
  },
};

export default cerereIntersectieSuprainaltata;
