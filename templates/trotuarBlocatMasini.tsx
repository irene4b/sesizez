import generateOSMLink from '../reusables/generateOSMLink';
import generateIntroduction from '../reusables/generateIntroduction';
import generateSignature from '../reusables/generateSignature';
import { getAuthoritiesEmails } from '../reusables/getAuthoritiesEmails';
import { reportedLocation, userPersonalData } from '../types';

const trotuarBlocatMasini = {
  title: 'Trotuar blocat de maşini',
  generator: (personal: userPersonalData, location: reportedLocation) => {
    const introduction = generateIntroduction(personal);
    const googleMapsLink = generateOSMLink(location.lat, location.lng);
    const signature = generateSignature(personal);
    return (
      `${introduction}\n\n` +
      `Vă scriu în legătură cu trotuarele ocupate de mașini parcate neregulamentar, blocând accesul pietonal în zona ${location.adresaLinie1} (vedeți pozele atașate și link-ul pentru hartă de mai jos)\n\n` +
      `Aceste mașini parcate neregulamentar blochează zilnic accesul părinților cu cărucioare de copii și a persoanelor cu dizabilități, punându-le viața in pericol atunci când sunt nevoiți să se deplaseze pe carosabil.\n\n` +
      `Link locație: ${googleMapsLink}\n\n` +
      `Doresc: \n` +
      `- avertizarea sau amendarea deținătorilor autovehiculelor parcate neregulamentar,\n` +
      `- montarea panourilor de parcare interzisă cu o vizibilitate bună,\n` +
      `- oprirea accesului pe trotuare prin montarea unor stâlpi,\n` +
      `Prin aceste acțiuni considerăm că se va asigura accesul în siguranță pe trotuare al tuturor persoanelor.\n\n` +
      `${signature}`
    );
  },
  destination: (localitate: string, judet: string) => {
    return getAuthoritiesEmails(localitate, judet, 'politiaLocala brigadaRutiera');
  },
};

export default trotuarBlocatMasini;
