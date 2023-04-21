import generateOSMLink from '../reusables/generateOSMLink';
import generateIntroduction from '../reusables/generateIntroduction';
import generateSignature from '../reusables/generateSignature';
import { getAuthoritiesEmails } from '../reusables/getAuthoritiesEmails';
import { reportedLocation, userPersonalData } from '../types';
import { ifMetroStationNearby, ifSchoolNearby } from '../reusables/ifNearby';

const trecerePietoniVopseaStearsa = {
  title: 'Trecere pietoni - vopsea ștearsă',
  generator: async (personal: userPersonalData, location: reportedLocation) => {
    const introduction = generateIntroduction(personal);
    const googleMapsLink = await generateOSMLink(location.lat, location.lng);
    const signature = generateSignature(personal);
    return (
      `${introduction}\n\n` +
      `Vă scriu în legătură cu trecerile de pietoni din apropierea ${location.adresaLinie1}, link harta: ${googleMapsLink}\n\n` +
      `În prezent oricine vrea să traverseze strada este pus în pericol din cauza absenței marcajelor corespunzătoare. Vopseaua este ștearsă, reducând vizibilitatea trecerii de pietoni de către șoferii ce conduc cu viteză. Situația curentă se poate vedea și în pozele atașate.\n\n` +
      `Doresc repararea acestor treceri de pietoni și aducerea lor la un standard decent pentru a putea traversa în siguranță strada:\n\n` +
      `- nivelarea trecerilor de pietoni: diferență de nivel lină între trotuar și carosabil \n` +
      `- marcarea (revopsirea) trecerii de pietoni în mod corespunzător\n` +
      `- îmbunătățirea semnelor de atenționare că urmează o trecere de pietoni (amplasare corespunzătoare, curățare)\n\n` +
      await ifSchoolNearby(location.lat, location.lng, (schoolName => `Va rog sa tineti cont de faptul ca in apropiere se afla ${schoolName}, iar in zilele saptamanii zeci sau chiar sute de copii pot traversa strada folosind aceastra trecere de pietoni. In special in acest caz este important sa ne gandim la siguranta copiilor.\n\n`)) + 
      await ifMetroStationNearby(location.lat, location.lng, (stationName => `De asemenea, va rog sa tineti cont de faptul ca in apropiere se afla ${stationName}, iar la orele de varf traficul pietonal creste semnificativ prin zona.\n\n`)) +
      `${signature}`
    );
  },
  destination: (localitate: string, judet: string) => {
    return getAuthoritiesEmails(localitate, judet, 'politiaLocala primarie adp administratiaStrazilor');
  },
};

export default trecerePietoniVopseaStearsa;
