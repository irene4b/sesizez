import * as Location from 'expo-location';
import { Alert } from 'react-native';
import { reportedLocation } from '../types';
import { osmReverseLookup } from './osmReverseLookup';

export const getCurrentLocation = async (): Promise<reportedLocation | undefined> => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    Alert.alert('Eroare', 'Permisiunea pentru locatie este necesara pentru autocompletarea adresei si generarea link-ului de harta.');
    return;
  }

  let { coords } = await Location.getCurrentPositionAsync({});
  const { latitude, longitude } = coords;
  return await osmReverseLookup({ lat: latitude, lng: longitude });
}