import { userPersonalData } from "../types";

const generateSignature = (personal: userPersonalData): string => {
  const timestamp = Date.now()
  const humanReadableDateTime = new Date(timestamp).toLocaleString()
  return `Aştept răspunsul dvs. şi numărul de înregistrare al sesizării.\nVă mulțumesc,\n\nNume şi prenume: ${personal.nume} ${personal.prenume}\nAdresă de corespondență: ${personal.adresaLinie1} ${personal.adresaLinie2}, ${personal.localitate}, ${personal.judet}\nData: ${humanReadableDateTime}`;
}

export default generateSignature;