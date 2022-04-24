import { StatusBar } from 'expo-status-bar';
import { Alert, Platform, SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Button, IndexPath, Input, Select, SelectItem } from '@ui-kitten/components';
import * as Location from 'expo-location';
import { Text, View } from '../components/Themed';
import React, { useEffect } from 'react';

export default function DatePersonale() {
  const [nume, setNume] = React.useState('');
  const [prenume, setPrenume] = React.useState('');
  const [adresaLinie1, setAdresaLinie1] = React.useState('');
  const [adresaLinie2, setAdresaLinie2] = React.useState('');
  const [localitate, setLocalitate] = React.useState('');
  const [judet, setJudet] = React.useState('');

  const saveAllInAsyncStorage = () => {
    AsyncStorage.setItem('nume', nume);
    AsyncStorage.setItem('prenume', prenume);
    AsyncStorage.setItem('adresaLinie1', adresaLinie1);
    AsyncStorage.setItem('adresaLinie2', adresaLinie2);
    AsyncStorage.setItem('localitate', localitate);
    AsyncStorage.setItem('judet', judet);
  };

  const getAllFromAsyncStorage = () => {
    AsyncStorage.getItem('nume').then((value) => setNume(value || ''));
    AsyncStorage.getItem('prenume').then((value) => setPrenume(value || ''));
    AsyncStorage.getItem('adresaLinie1').then((value) => setAdresaLinie1(value || ''));
    AsyncStorage.getItem('adresaLinie2').then((value) => setAdresaLinie2(value || ''));
    AsyncStorage.getItem('localitate').then((value) => setLocalitate(value || ''));
    AsyncStorage.getItem('judet').then((value) => setJudet(value || ''));
  }

  useEffect(() => {
    getAllFromAsyncStorage();
  }, []);

  useEffect(() => {
    saveAllInAsyncStorage();
  }, [nume, prenume, adresaLinie1, adresaLinie2, localitate, judet]);

  const createMissingLocationPermissionAlert = () =>
    Alert.alert('Eroare', 'Permisiunea pentru locatie este necesara pentru autocompletarea adresei.', [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

  const useCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      createMissingLocationPermissionAlert();
      return;
    }

    let { coords } = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = coords;
    let response = await Location.reverseGeocodeAsync({
      latitude,
      longitude
    });

    if(!response[0].name) return;

    setAdresaLinie1(`Str. ${response[0].street}, nr. ${response[0].streetNumber}`);
    setLocalitate(response[0].city || '');

    if(response[0].city === 'Bucureşti')
      setJudet(response[0].district?.replace('Bucureşti ', '') || '');

    console.log(response);
  }

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text style={styles.subtitle}>Bun venit! Înainte de a putea face sesizări avem nevoie de câteva date personale. Acestea sunt necesare pentru înregistrarea oficială a sesizărilor.</Text>
        <Text style={styles.subtitle}>Datele sunt salvate în siguranță pe telefonul tău. Schimbările sunt salvate automat.</Text>
        <Text style={styles.title}>Nume complet</Text>
        <Input
          placeholder='Scrie aici...'
          label='Nume de familie'
          value={nume}
          onChangeText={newNume => setNume(newNume)}
        />
        <Input
          placeholder='Scrie aici...'
          label='Prenume'
          value={prenume}
          onChangeText={newPrenume => setPrenume(newPrenume)}
        />
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text style={styles.title}>Adresa de domiciliu</Text>
        <Button onPress={useCurrentLocation}>
          Folosește locația curenta
        </Button>
        <Input
          placeholder='Strada, numărul'
          label='Adresa linie 1'
          value={adresaLinie1}
          onChangeText={newAdresaLinie1 => setAdresaLinie1(newAdresaLinie1)}
        />
        <Input
          placeholder='(Dacă e cazul) bloc, scară, apt, etaj'
          label='Adresa linie 2'
          value={adresaLinie2}
          onChangeText={newAdresaLinie2 => setAdresaLinie2(newAdresaLinie2)}
        />
        <Input
          placeholder='Scrie aici...'
          label='Localitate'
          value={localitate}
          onChangeText={newLocalitate => setLocalitate(newLocalitate)}
        />
        <Input
          placeholder='Scrie aici...'
          label='Județ sau sector'
          value={judet}
          onChangeText={newJudet => setJudet(newJudet)}
        />
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: '5%',
    paddingBottom: '20%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 13,
    marginBottom: 10,
    textAlign: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
