import { userPersonalData } from "../types";

const generateIntroduction = (personal: userPersonalData) => {
  const { nume, prenume, adresaLinie1, localitate, judet } = personal;
  return `Sumbsemnatul/a ${nume} ${prenume}, domiciliat/ă în ${localitate}, ${judet}, ${adresaLinie1}, formulez prezenta sesizare:`;
}

export default generateIntroduction;