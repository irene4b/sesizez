import generateOSMLink from '../reusables/generateOSMLink';
import generateIntroduction from '../reusables/generateIntroduction';
import generateSignature from '../reusables/generateSignature';
import { getAuthoritiesEmails } from '../reusables/getAuthoritiesEmails';
import { reportedLocation, userPersonalData } from '../types';

const copaciVegetatieBlocareVizibilitate = {
  title: 'Copaci și vegetație care blochează semne de circulație sau vizibilitatea',
  generator: (personal: userPersonalData, location: reportedLocation) => {
    const introduction = generateIntroduction(personal);
    const googleMapsLink = generateOSMLink(location.lat, location.lng);
    const signature = generateSignature(personal);
    return (
      `${introduction}\n\n` +
      `Doresc să vă semnalez o problemă legată de copaci și vegetație care blochează semnele de circulație și vizibilitatea în zona ${location.adresaLinie1}, link harta: ${googleMapsLink}\n\n` +
      `Copacii și vegetația crescute în exces obstrucționează vizibilitatea semnelor de circulație și a intersecțiilor, punând în pericol siguranța șoferilor și a pietonilor. Situația actuală se poate vedea și în pozele atașate.\n\n` +
      `Vă solicit să luați măsurile necesare pentru a remedia această problemă, inclusiv:\n\n` +
      `- tăierea vegetației în exces\n` +
      `- realizarea unui plan de întreținere regulată a vegetației în zonă pentru a preveni reapariția problemei\n` +
      `- evaluarea posibilității de relocare a semnelor de circulație afectate pentru a îmbunătăți vizibilitatea\n\n` +
      `${signature}`
    );
  },
  destination: (localitate: string, judet: string) => {
    return getAuthoritiesEmails(localitate, judet, 'primarie administratiaStrazilor');
  },
};

export default copaciVegetatieBlocareVizibilitate;
