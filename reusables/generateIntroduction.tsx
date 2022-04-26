import { userPersonalData } from '../types';

const generateIntroduction = (personal: userPersonalData) => {
  const { nume, prenume, cnp, adresaLinie1, localitate, judet } = personal;
  const genderFromCNP = Number(cnp[0]) % 2 === 1 ? 'M' : 'F';
  const suffix1 = genderFromCNP === 'M' ? 'ul' : 'a';
  const suffix2 = genderFromCNP === 'M' ? '' : 'ă';

  return `Subsemnat${suffix1} ${nume} ${prenume}, domiciliat${suffix2} în ${localitate}, ${judet}, ${adresaLinie1}, CNP ${cnp}, formulez prezenta sesizare:`;
};

export default generateIntroduction;
