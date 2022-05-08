import { userPersonalData } from "../types";

const generateSignature = (personal: userPersonalData): string => {
  const timestamp = Date.now()
  const humanReadableDateTime = new Date(timestamp).toLocaleString()
  return `Aștept răspunsul dvs. și numărul de înregistrare al sesizării.\nVă mulțumesc,\n\nNume și prenume: ${personal.nume} ${personal.prenume}\nAdresă de corespondență: ${personal.adresaLinie1} ${personal.adresaLinie2}, ${personal.localitate}, ${personal.judet}\nData: ${humanReadableDateTime}`;
}

export default generateSignature;
