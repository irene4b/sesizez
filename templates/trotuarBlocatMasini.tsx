import generateGoogleMapsLink from "../reusables/generateGoogleMapsLink";
import generateIntroduction from "../reusables/generateIntroduction";
import generateSignature from "../reusables/generateSignature";
import { reportedLocation, userPersonalData } from "../types";

const trotuarBlocatMasini = {
  title: 'Trotuar blocat de maşini',
  generator: (personal: userPersonalData, location: reportedLocation) => {
    const introduction = generateIntroduction(personal);
    const googleMapsLink = generateGoogleMapsLink(location.lat, location.lng);
    const signature = generateSignature(personal);
    return `${introduction}\n\n` +
      `Vă scriu în legătură cu trotuarele ocupate de maşini parcate neregulamentar, blocând accesul pietonal în zona ${location.adresaLinie1} (vedeți pozele ataşate şi link-ul pentru hartă de mai jos)\n\n` +
      `Aceste maşini parcate neregulamentar blochează zilnic accesul părinților cu cărucioare de copii şi a persoanelor cu dizabilități mobile, punându-le viața in pericol atunci când sunt nevoiți să se deplaseze pe carosabil.\n\n` +
      `Link locație: ${googleMapsLink}\n\n` +
      `Dorim: \n` +
      `- avertizarea sau amendarea deținătorilor autovehiculelor parcate neregulamentar,\n` +
      `- montarea panourilor de parcare interzisă cu o vizibilitate bună,\n` +
      `- oprirea accesului pe trotuare prin montarea unor stâlpi,\n` +
      `Prin aceste acțiuni considerăm că se va asigura accesul în siguranță pe trotuare al tuturor persoanelor.\n\n` +
      `${signature}`;
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
      default: return [];
    }
  }
}

export default trotuarBlocatMasini;