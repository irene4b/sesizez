import { Alert } from "react-native";
import { authoritiesEmails } from "../constants/emails";
import { authorities } from "../types";

export const getAuthoritiesEmails = (localitate: string, judet: string, catre: string): string[] => {
  let emails: string[] = [];
  const catreArray = catre.split(' ');

  catreArray.forEach(destinatar => {
    const currentAuthorityEmails = authoritiesEmails[destinatar as authorities];
    if (currentAuthorityEmails) {
      const localitateJudet = `${localitate} - ${judet}`;
      if (Object.keys(currentAuthorityEmails).includes(localitateJudet)) {
        const currentLocationAuthorityEmails = (currentAuthorityEmails as any)[`${localitate} - ${judet}`];
        emails = [...emails, ...currentLocationAuthorityEmails];
      }
    }

  });

  if(emails.length === 0) {
    Alert.alert(`Încă nu putem autocompleta adresele de mail ale autorităților din ${localitate}. Poți să ne ajuți pe GitHub!`)
  }

  return emails;
}