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
      `Vă adresez această sesizare pentru a sublinia importanța creării unei piste de biciclete în apropierea ${location.adresaLinie1}, link hartă: ${googleMapsLink}. Circulația pe bicicletă și trotinetă electrică reprezintă alternative viabile și ecologice la autovehicule, contribuind la reducerea emisiilor poluante, traficului și îmbunătățirea sănătății cetățenilor.\n\n` +
      `Cu toate acestea, în prezent, utilizatorii de biciclete și trotinete electrice se confruntă cu numeroase pericole pe această stradă, datorită autovehiculelor care circulă cu viteză mare și lipsei unei infrastructuri adecvate. Situația curentă se poate vedea și în pozele atașate.\n\n` +
      `Pentru a încuraja și asigura un transport activ și sigur în zonă, vă rog să luați în considerare următoarele măsuri:\n\n` +
      `- crearea unei piste de biciclete separate și delimitate, ce respectă standardele europene\n` +
      `- separarea pistei de biciclete de restul traficului prin intermediul unor bariere de protecție\n` +
      `- instalarea unor stâlpi sau borduri ce restricționează accesul mașinilor pe pistă\n` +
      `- avertizarea sau amendarea autovehiculelor oprite neregulamentar pe pistă\n\n` +
      `Aceste măsuri pot contribui la promovarea unui transport durabil și la îmbunătățirea calității vieții în zonă. Vă mulțumesc pentru atenția acordată și aștept cu interes răspunsul dumneavoastră.\n\n` +
      `${signature}`
    );
  },
  destination: (localitate: string, judet: string) => {
    return getAuthoritiesEmails(localitate, judet, 'politiaLocala primarie adp administratiaStrazilor');
  },
};

export default pistaBicicleteInexistenta;
