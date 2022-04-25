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
     `Plimbându-mă în zona din jurul ${location.adresaLinie1}, am sesizat mai multe nereguli în ceea ce privește trotuarele. Existe multe gropi, denivelări, treceri de pietoni cu obstacole precum bordurile înalte.\n` +
     `Pentru părinții cu cărucioare de copii şi persoanele cu dizabilități mobile o plimbare plăcută în oraș se transformă într-un drum anevoios și obositor.\n` +
     `Atașez câteva poze făcute cu telefonul, cu situația din teren, și vă las aici link-ul pentru hartă: ${googleMapsLink}\n\n` +
     `Dorim repararea acestor trotuare și aducerea lor la un standard decent pentru a putea circula în siguranță ca pietoni. \n\n` +
    `${signature}`;
  },
  destination: (localitate: string, judet: string) => {
    switch (`${localitate} - ${judet}`) {
      case 'Bucureşti - Sectorul 1':
        return ['secretariat@adp-sector1.ro', 'office@aspmb.ro'];
      case 'Bucureşti - Sectorul 2':
        return ['office@adp2.ro', 'office@aspmb.ro'];
      case 'Bucureşti - Sectorul 3':
        return ['domeniu.public@primarie3.ro', 'office@aspmb.ro'];
      case 'Bucureşti - Sectorul 4':
        return ['info@adp4.ro', 'info@totulverde.ro', 'office@aspmb.ro'];
      case 'Bucureşti - Sectorul 5':
        return ['dadp@sector5.ro', 'office@aspmb.ro'];
      case 'Bucureşti - Sectorul 6':
        return ['contact@adps6.ro', 'office@aspmb.ro'];
      default: return [];
    }
  }
}

export default trotuarDegradat;