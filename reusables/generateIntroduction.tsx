import { userPersonalData } from '../types';

const generateIntroduction = (personal: userPersonalData) => {
  const { nume, prenume, gen, cnp, adresaLinie1, localitate, judet } = personal;

  let prefix = '';

  switch (gen) {
    case 'M':
      prefix = 'Subsemnatul';
      break;
    case 'F':
      prefix = 'Subsemnata';
      break;
    case 'NBM':
      prefix = 'Subsemnatul/a';
      break;
    case 'NB':
    default:
      prefix = 'Către persoanele responsabile:\n\n';
      break;
  }

  return `${prefix} ${nume} ${prenume}, cu domiciliul în ${localitate}, ${judet}, ${adresaLinie1}, CNP ${cnp}, formulez prezenta sesizare:`;
};

export default generateIntroduction;
