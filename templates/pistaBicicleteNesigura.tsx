import generateGoogleMapsLink from '../reusables/generateGoogleMapsLink';
import generateIntroduction from '../reusables/generateIntroduction';
import generateSignature from '../reusables/generateSignature';
import { reportedLocation, userPersonalData } from '../types';

const pistaBicicleteNesigura = {
  title: 'Pistă de biciclete nesigură',
  generator: (personal: userPersonalData, location: reportedLocation) => {
    const introduction = generateIntroduction(personal);
    const googleMapsLink = generateGoogleMapsLink(location.lat, location.lng);
    const signature = generateSignature(personal);
    return (
      `${introduction}\n\n` +
      `Vă scriu în legătură cu pista de biciclete din apropierea ${location.adresaLinie1}, link harta: ${googleMapsLink}\n\n` +
      `În prezent oricine circulă cu bicicleta sau trotineta electrică pe această pistă de biciclete este pus în pericol de autovehiculele ce circulă cu mare viteză pe benzile de lângă și de cei ce opresc neregulamentar pe pistă. Situația curentă se poate vedea și în pozele atașate.\n\n` +
      `Doresc separarea acestor piste de biciclete și aducerea lor la un standard decent pentru a putea circula în siguranță și cu bicicleta pe stradă:\n\n` +
      `- separarea pistei de biciclete de orice tip de trafic de mare viteză\n` +
      `- instalarea unor stâlpi sau unor borduri ce nu permit accesul mașinilor pe pistă\n` +
      `- avertizarea sau amendarea autovehiculelor oprite neregulamentar\n\n` +
      `${signature}`
    );
  },
  destination: (localitate: string, judet: string) => {
    switch (`${localitate} - ${judet}`) {
      case 'Bucureşti - Sectorul 1':
        return [
          'contact@politialocalasector1.ro',
          'office@aspmb.ro',
          'registratura@primarias1.ro',
          'secretariat@adp-sector1.ro',
        ];
      case 'Bucureşti - Sectorul 2':
        return [
          'office@politialocalas2.ro',
          'office@aspmb.ro',
          'infopublice@ps2.ro',
          'office@adp2.ro',
        ];
      case 'Bucureşti - Sectorul 3':
        return [
          'secretariat@politialocala3.ro',
          'office@aspmb.ro',
          'relatiipublice@primarie3.ro',
          'domeniu.public@primarie3.ro',
        ];
      case 'Bucureşti - Sectorul 4':
        return [
          'sesizari@politialocala4.ro',
          'office@aspmb.ro',
          'info@adp4.ro',
          'contact@ps4.ro',
          'info@totulverde.ro',
        ];
      case 'Bucureşti - Sectorul 5':
        return [
          'politialocala@sector5.ro',
          'office@aspmb.ro',
          'sesizari@sector5.ro',
          'primarie@sector5.ro',
          'dadp@sector5.ro',
        ];
      case 'Bucureşti - Sectorul 6':
        return [
          'office@politia6.ro',
          'office@aspmb.ro',
          'prim6@primarie6.ro',
          'contact@adps6.ro',
        ];
      default:
        return [];
    }
  },
};

export default pistaBicicleteNesigura;
