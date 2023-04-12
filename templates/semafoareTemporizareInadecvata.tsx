import generateOSMLink from '../reusables/generateOSMLink';
import generateIntroduction from '../reusables/generateIntroduction';
import generateSignature from '../reusables/generateSignature';
import { getAuthoritiesEmails } from '../reusables/getAuthoritiesEmails';
import { reportedLocation, userPersonalData } from '../types';

const semafoareTemporizareInadecvata = {
  title: 'Semafoare - temporizare inadecvată',
  generator: (personal: userPersonalData, location: reportedLocation) => {
    const introduction = generateIntroduction(personal);
    const googleMapsLink = generateOSMLink(location.lat, location.lng);
    const signature = generateSignature(personal);
    return (
      `${introduction}\n\n` +
      `Vă adresez această sesizare pentru a semnala probleme legate de temporizarea semafoarelor situate în apropierea ${location.adresaLinie1}, link harta: ${googleMapsLink}. Consider că temporizarea actuală a semafoarelor nu este optimă și poate fi îmbunătățită pentru a asigura o mai bună circulație a pietonilor, bicicliștilor și șoferilor.\n\n` +
      `Solicit modificarea temporizării semafoarelor astfel încât să se acorde prioritate pietonilor și bicicliștilor, permițându-le să traverseze strada înaintea mașinilor. Acest lucru va crește siguranța și va încuraja o mai bună conviețuire între diferitele mijloace de transport în zonă.\n\n` +
      `Sugerez ca temporizarea să fie ajustată astfel:\n\n` +
      `- să se acorde timp suficient pentru ca pietonii și bicicliștii să traverseze strada în siguranță\n` +
      `- să se evite perioadele lungi de așteptare pentru pietoni, bicicliști și șoferi\n` +
      `- să se reducă riscul de accidente între pietoni, bicicliști și mașini\n\n` +
      `Beneficii pentru șoferi:\n\n` +
      `- reducerea blocajelor și a timpilor de așteptare la semafoare\n` +
      `- îmbunătățirea fluidității traficului prin sincronizarea semafoarelor\n` +
      `- prevenirea unor manevre periculoase cauzate de frustrarea șoferilor\n\n` +
      `Vă rog să analizați această situație și să luați măsuri pentru a optimiza temporizarea semafoarelor în conformitate cu sugestiile menționate mai sus.\n\n` +
      `${signature}`
    );
  },
  destination: (localitate: string, judet: string) => {
    return getAuthoritiesEmails(localitate, judet, 'primarie administratiaStrazilor');
  },
};

export default semafoareTemporizareInadecvata;
