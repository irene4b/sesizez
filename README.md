# Sesizez
![screenshots](https://user-images.githubusercontent.com/17914968/165262030-6bcf93bc-2655-4ccc-90e2-150b93c9ccd9.jpg)
[![runs with Expo Go](https://img.shields.io/badge/Runs%20with%20Expo%20Go-4630EB.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.dev/client)
![GitHub](https://img.shields.io/github/license/alexbulintis/sesizez?style=flat-square)
[![Discord](https://img.shields.io/discord/969155519233277952?style=flat-square)](https://discord.gg/qSqZ9PaqQY)

Aplicație pentru a ușura procesul de trimitere al sesizărilor.

Toate datele sunt stocate local iar email-urile pentru sesizări sunt generate pe device-ul utilizatorului și trimise cu aplicația default de email. Am început proiectul deoarece voiam o modalitate ușoară (fără să formulez email-uri în "legaleză", fără să îmi fac conturi pe aplicații ale primăriilor) de a face sesizări oriunde aș fi în București. Sper ca proiectul să crească și să se extindă în toate orașele din România!

[Hai pe Discord ca sa colaboram mai eficient!](https://discord.gg/qSqZ9PaqQY)

## Rularea proiectului

  - Clonează repo-ul local
  - Instalează Expo CLI `npm i -g expo-cli`
  - Rulează proiectul: `expo start`
  - Apasă `a` pentru a rula în Android, `i` pentru a rula în Simulatorul iOS, sau:
  - Scanează QR code-ul din terminal cu aplicația Expo Go pentru a testa pe telefon

Aplicația nu funcționează în browser deoarece atașarea imaginilor este imposibilă folosind link-urile `mailto:`

## Permisiuni necesare

  - Locație: pentru a adăuga adresa în email (obligatoriu) sau pentru autocompletarea adresei în modalul de date personale (opțional)
  - Galerie / Cameră Foto: pentru a atașa dovezile în email (obligatoriu)

Datele tale nu părăsesc telefonul mobil decât către autoritățile locale atunci când trimiți un e-mail, și către [OpenStreetMap](https://www.openstreetmap.org/about) pentru a determina adresa în funcție de coordonate.

## Orașe în care autocompletarea adreselor de mail este disponibilă

  - București (toate sectoarele)
  - Iași
  - Cluj-Napoca
  - Craiova

## Licență

Acest proiect este distribuit sub licența GNU General Public License v3.0. 

Sumar: Puteți copia, distribui și modifica software-ul atâta timp cât urmăriți modificările/datele din fișierele sursă. Orice modificare sau software care include (prin intermediul compilatorului) cod licențiat GPL trebuie, de asemenea, să fie disponibil sub licența GPL, împreună cu instrucțiunile de compilare și instalare.

[Vezi textul complet al licenței aici](https://tldrlegal.com/license/gnu-general-public-license-v3-(gpl-3)#fulltext)
