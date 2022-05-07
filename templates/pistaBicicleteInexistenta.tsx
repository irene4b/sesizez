import generateOSMLink from '../reusables/generateOSMLink';
import generateIntroduction from '../reusables/generateIntroduction';
import generateSignature from '../reusables/generateSignature';
import { getAuthoritiesEmails } from '../reusables/getAuthoritiesEmails';
import { reportedLocation, userPersonalData } from '../types';

const pistaBicicleteInexistenta = {
  title: 'Pistă de biciclete inexistentă',
  generator: (personal: userPersonalData, location: reportedLocation) => {
    const introduction = generateIntroduction(personal);
    const googleMapsLink = generateOSMLink(location.lat, location.lng);
    const signature = generateSignature(personal);
    return (
      `${introduction}\n\n` +
      `Vă scriu în legătură cu circulația bicicletelor din apropierea ${location.adresaLinie1}, link hartă: ${googleMapsLink}\n\n` +
      `În prezent oricine circulă cu bicicleta sau trotineta electrică pe această stradă este pus în pericol de autovehiculele care circulă cu mare viteză. Situația curentă se poate vedea și în pozele atașate.\n\n` +
      `Doresc crearea unei piste de biciclete separată și delimitată cu elemente de protecție de restul benzilor pentru a putea circula în siguranță cu bicicleta pe stradă:\n\n` +
      `- crearea unei piste de biciclete ce respectă standardele europene\n` +
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

export default pistaBicicleteInexistenta;
