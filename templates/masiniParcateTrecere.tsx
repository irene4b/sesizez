import generateGoogleMapsLink from '../reusables/generateGoogleMapsLink';
import generateIntroduction from '../reusables/generateIntroduction';
import generateSignature from '../reusables/generateSignature';
import { reportedLocation, userPersonalData } from '../types';

const masiniParcateTrecere = {
  title: 'Masini parcate in apropierea trecerii de pietoni',
  generator: (personal: userPersonalData, location: reportedLocation) => {
    const introduction = generateIntroduction(personal);
    const googleMapsLink = generateGoogleMapsLink(location.lat, location.lng);
    const signature = generateSignature(personal);
    return (
      `${introduction}\n\n` +
      `Vă scriu în legătură cu mașinile parcate neregulamentar în apropierea trecerii de pietoni de pe lângă ${location.adresaLinie1} (vedeți pozele ataşate și link-ul pentru hartă de mai jos)\n\n` +
      `Aceste mașini parcate neregulamentar fac imposibilă observarea în timp util a pietonilor, punându-le acestora viața în pericol când intenționează să treacă strada.\n\n` +
      `Link locație: ${googleMapsLink}\n\n` +
      `Doresc: \n` +
      `- amendarea șoferilor care parchează ilegal, nerespectând distanța minimă față de trecerea de pietoni,\n` +
      `- montarea panourilor de semnalizare a interzicerii parcării într-un punct cu o vizibilitate bună,\n` +
      `- extinderea trotuarului în apropierea trecerii de pietoni pentru a preveni parcatul neregulamentar (exemplu: https://i.imgur.com/iCKDqTU.jpg ),\n` +
      `Prin aceste acțiuni consider că se vor asigura condiții de traversare în siguranță pentru toate categoriile de persoane.\n\n` +
      `${signature}`
    );
  },
  destination: (localitate: string, judet: string) => {
    switch (`${localitate} - ${judet}`) {
      case 'Bucureşti - Sectorul 1':
        return ['contact@politialocalasector1.ro', 'bpr@b.politiaromana.ro'];
      case 'Bucureşti - Sectorul 2':
        return ['office@politialocalas2.ro', 'bpr@b.politiaromana.ro'];
      case 'Bucureşti - Sectorul 3':
        return ['secretariat@politialocala3.ro', 'bpr@b.politiaromana.ro'];
      case 'Bucureşti - Sectorul 4':
        return ['sesizari@politialocala4.ro', 'bpr@b.politiaromana.ro'];
      case 'Bucureşti - Sectorul 5':
        return ['politialocala@sector5.ro', 'bpr@b.politiaromana.ro'];
      case 'Bucureşti - Sectorul 6':
        return ['office@politia6.ro', 'bpr@b.politiaromana.ro'];
      default:
        return [];
    }
  },
};

export default masiniParcateTrecere;
