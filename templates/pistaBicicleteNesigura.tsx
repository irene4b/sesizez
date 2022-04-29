import generateOSMLink from '../reusables/generateOSMLink';
import generateIntroduction from '../reusables/generateIntroduction';
import generateSignature from '../reusables/generateSignature';
import { getAuthoritiesEmails } from '../reusables/getAuthoritiesEmails';
import { reportedLocation, userPersonalData } from '../types';

const pistaBicicleteNesigura = {
  title: 'Pistă de biciclete nesigură',
  generator: (personal: userPersonalData, location: reportedLocation) => {
    const introduction = generateIntroduction(personal);
    const googleMapsLink = generateOSMLink(location.lat, location.lng);
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
    return getAuthoritiesEmails(localitate, judet, 'politiaLocala primarie adp administratiaStrazilor');
  },
};

export default pistaBicicleteNesigura;
