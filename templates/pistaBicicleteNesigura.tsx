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
      `Vă adresez această sesizare pentru a sublinia importanța îmbunătățirii siguranței pe pista de biciclete din apropierea ${location.adresaLinie1}, link hartă: ${googleMapsLink}. Circulația pe bicicletă și trotinetă electrică reprezintă modalități de transport sustenabile și benefice pentru sănătatea cetățenilor și mediul înconjurător.\n\n` +
      `Cu toate acestea, în prezent, utilizatorii de biciclete și trotinete electrice întâmpină pericole semnificative pe această pistă, cauzate de autovehiculele care circulă cu viteză mare pe benzile adiacente și de cei care opresc neregulamentar pe pistă. Situația curentă se poate vedea și în pozele atașate.\n\n` +
      `Pentru a asigura o infrastructură sigură și confortabilă pentru toți utilizatorii, vă rog să luați în considerare următoarele măsuri:\n\n` +
      `- separarea pistei de biciclete de restul traficului prin intermediul unor bariere de protecție\n` +
      `- instalarea unor stâlpi sau borduri ce restricționează accesul mașinilor pe pistă\n` +
      `- avertizarea sau amendarea autovehiculelor oprite neregulamentar pe pistă\n\n` +
      `Aceste măsuri vor contribui la promovarea unui transport durabil și la îmbunătățirea calității vieții în zonă. Vă mulțumesc pentru atenția acordată și aștept cu interes răspunsul dumneavoastră.\n\n` +
      `${signature}`
    );
  },
  destination: (localitate: string, judet: string) => {
    return getAuthoritiesEmails(localitate, judet, 'politiaLocala primarie adp administratiaStrazilor');
  },
};

export default pistaBicicleteNesigura;
