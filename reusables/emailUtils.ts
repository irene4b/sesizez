import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import * as MailComposer from 'expo-mail-composer';
import { userPersonalData } from '../types';
import { getCurrentLocation } from '../reusables/getCurrentLocation';
import { calculateCoordinateDistance } from '../reusables/calculateCoordinateDistance';
import { osmReverseLookup } from '../reusables/osmReverseLookup';
import { setTemplateCount } from '../reusables/templateCounts';

export const sendEmail = async (
  setIsLoading: (value: boolean) => void,
  checkLocalStorage: () => Promise<boolean>,
  images: Array<string>,
  firstImageExif: any,
  selectedIndex: number,
  templates: any[],
) => {
  setIsLoading(true);
  const isProfileCompleted = await checkLocalStorage();
  if (!isProfileCompleted) {
    setIsLoading(false);
    return;
  }
  if (!images.length) {
    Alert.alert('Trebuie să adaugi cel puțin o poză doveditoare.');
    setIsLoading(false);
    return;
  }
  const personalData: userPersonalData = {
    nume: (await AsyncStorage.getItem('nume')) || '',
    prenume: (await AsyncStorage.getItem('prenume')) || '',
    cnp: (await AsyncStorage.getItem('cnp')) || '',
    adresaLinie1: (await AsyncStorage.getItem('adresaLinie1')) || '',
    adresaLinie2: (await AsyncStorage.getItem('adresaLinie2')) || '',
    localitate: (await AsyncStorage.getItem('localitate')) || '',
    judet: (await AsyncStorage.getItem('judet')) || '',
  };

  let currentLocation = await getCurrentLocation();

  // if image was taken further away from the user
  const exif = await firstImageExif;
  if (exif?.GPSLatitude && exif?.GPSLongitude && currentLocation) {
    const distanceFromHere = calculateCoordinateDistance(
      { lat: currentLocation?.lat, lng: currentLocation?.lng },
      { lat: exif.GPSLatitude, lng: exif.GPSLongitude }
    );

    if (distanceFromHere > 100) {
      Alert.alert(
        'Poza a fost făcută departe de locația curentă. Vom folosi locația pozei în sesizare.'
      );

      currentLocation = await osmReverseLookup({
        lat: exif.GPSLatitude,
        lng: exif.GPSLongitude,
      });
    }
  }

  if (!currentLocation) {
    setIsLoading(false);
    Alert.alert(
      'Eroare',
      'Nu am putut obține locația curentă. Te rugăm să încerci din nou.'
    );
    return;
  }
  try {
    await MailComposer.composeAsync({
      body: templates[selectedIndex].generator(personalData, currentLocation),
      subject: templates[selectedIndex].title,
      recipients: templates[selectedIndex].destination(
        currentLocation.localitate,
        currentLocation.judet
      ),
      attachments: images,
    });
    await setTemplateCount(templates[selectedIndex].title);
  } catch (e) {
    Alert.alert(
      'Eroare',
      'Nu am putut trimite emailul. Te rugăm să încerci din nou. Verifica dacă ești conectat cu o adresă validă pe aplicația de email.'
    );
  }
  setIsLoading(false);
};
