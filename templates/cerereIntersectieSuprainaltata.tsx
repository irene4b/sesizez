import generateOSMLink from '../reusables/generateOSMLink';
import generateIntroduction from '../reusables/generateIntroduction';
import generateSignature from '../reusables/generateSignature';
import { getAuthoritiesEmails } from '../reusables/getAuthoritiesEmails';
import { reportedLocation, userPersonalData } from '../types';
import { ifMetroStationNearby, ifSchoolNearby } from '../reusables/ifNearby';

const cerereIntersectieSuprainaltata = {
  title: 'Cerere intersecție supraînălțată',
  generator: async (personal: userPersonalData, location: reportedLocation) => {
    const introduction = generateIntroduction(personal);
    const googleMapsLink = await generateOSMLink(location.lat, location.lng);
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
      (await ifSchoolNearby(
        location.lat,
        location.lng,
        schoolName =>
          `Va rog sa tineti cont de faptul ca in apropiere se afla ${schoolName}, iar in zilele saptamanii zeci sau chiar sute de copii pot traversa strazile din imprejurimi.\n\n`
      )) +
      (await ifMetroStationNearby(
        location.lat,
        location.lng,
        stationName =>
          `De asemenea, in apropiere se afla ${stationName}, iar o intersectie suprainaltata ar creste siguranta sutelor (sau chiar miilor) de oameni ce calatoresc zi de zi.\n\n`
      )) +
      `Sunt convins că investiția într-o intersecție supraînălțată în această zonă va aduce beneficii considerabile comunității și va contribui la creșterea calității vieții locuitorilor.\n\n` +
      `${signature}`
    );
  },
  destination: (localitate: string, judet: string) => {
    return getAuthoritiesEmails(
      localitate,
      judet,
      'primarie administratiaStrazilor adp'
    );
  },
};

export default cerereIntersectieSuprainaltata;
