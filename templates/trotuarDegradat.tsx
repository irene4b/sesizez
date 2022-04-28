import generateGoogleMapsLink from "../reusables/generateGoogleMapsLink";
import generateIntroduction from "../reusables/generateIntroduction";
import generateSignature from "../reusables/generateSignature";
import { reportedLocation, userPersonalData } from "../types";

const trotuarDegradat = {
  title: 'Trotuar degradat',
  generator: (personal: userPersonalData, location: reportedLocation) => {
    const introduction = generateIntroduction(personal);
    const googleMapsLink = generateGoogleMapsLink(location.lat, location.lng);
    const signature = generateSignature(personal);
    return `${introduction}\n\n` +
     `Aduc în atenția dvs. câteva dintre problemele de pe trotuarele din apropierea ${location.adresaLinie1}.\n` +
     `Plimbându-mă în zona din jurul ${location.adresaLinie1}, am sesizat mai multe nereguli legate de starea trotuarelor. Există multe gropi, denivelări, treceri de pietoni cu obstacole precum bordurile înalte.\n` +
     `Pentru părinții cu cărucioare de copii și persoanele cu dizabilități o plimbare plăcută în oraș se transformă într-un drum anevoios și obositor.\n` +
     `Atașez câteva poze făcute cu telefonul, cu situația din teren, și vă las aici link-ul pentru hartă: ${googleMapsLink}\n\n` +
     `Doresc repararea acestor trotuare și aducerea lor la un standard decent pentru a putea circula în siguranță ca pietoni. \n\n` +
    `${signature}`;
  },
  destination: (localitate: string, judet: string) => {
    switch (`${localitate} - ${judet}`) {
      case 'Bucharest - Sector 1':
        return ['secretariat@adp-sector1.ro', 'office@aspmb.ro'];
      case 'Bucharest - Sector 2':
        return ['office@adp2.ro', 'office@aspmb.ro'];
      case 'Bucharest - Sector 3':
        return ['domeniu.public@primarie3.ro', 'office@aspmb.ro'];
      case 'Bucharest - Sector 4':
        return ['info@adp4.ro', 'info@totulverde.ro', 'office@aspmb.ro'];
      case 'Bucharest - Sector 5':
        return ['dadp@sector5.ro', 'office@aspmb.ro'];
      case 'Bucharest - Sector 6':
        return ['contact@adps6.ro', 'office@aspmb.ro'];
      default: return [];
    }
  }
}

export default trotuarDegradat;