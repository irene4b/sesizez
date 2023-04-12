import { StatusBar } from 'expo-status-bar';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import { Button, Icon, Input } from '@ui-kitten/components';
import { Text, View } from '../components/Themed';
import React, { useEffect } from 'react';
import { getCurrentLocation } from '../reusables/getCurrentLocation';

export default function DatePersonale() {
  const [nume, setNume] = React.useState('');
  const [prenume, setPrenume] = React.useState('');
  const [cnp, setCNP] = React.useState('');
  const [adresaLinie1, setAdresaLinie1] = React.useState('');
  const [adresaLinie2, setAdresaLinie2] = React.useState('');
  const [localitate, setLocalitate] = React.useState('');
  const [judet, setJudet] = React.useState('');

  const navigation = useNavigation();

  const saveAllInAsyncStorage = () => {
    AsyncStorage.setItem('nume', nume);
    AsyncStorage.setItem('prenume', prenume);
    AsyncStorage.setItem('cnp', cnp);
    AsyncStorage.setItem('adresaLinie1', adresaLinie1);
    AsyncStorage.setItem('adresaLinie2', adresaLinie2);
    AsyncStorage.setItem('localitate', localitate);
    AsyncStorage.setItem('judet', judet);
  };

  const getAllFromAsyncStorage = () => {
    AsyncStorage.getItem('nume').then((value) => setNume(value || ''));
    AsyncStorage.getItem('prenume').then((value) => setPrenume(value || ''));
    AsyncStorage.getItem('cnp').then((value) => setCNP(value || ''));
    AsyncStorage.getItem('adresaLinie1').then((value) =>
      setAdresaLinie1(value || '')
    );
    AsyncStorage.getItem('adresaLinie2').then((value) =>
      setAdresaLinie2(value || '')
    );
    AsyncStorage.getItem('localitate').then((value) =>
      setLocalitate(value || '')
    );
    AsyncStorage.getItem('judet').then((value) => setJudet(value || ''));
  };

  useEffect(() => {
    getAllFromAsyncStorage();
  }, []);

  useEffect(() => {
    saveAllInAsyncStorage();
  }, [nume, prenume, cnp, adresaLinie1, adresaLinie2, localitate, judet]);

  const useCurrentLocation = async () => {
    const currentLocation = await getCurrentLocation();
    if (currentLocation) {
      setAdresaLinie1(currentLocation.adresaLinie1);
      if(currentLocation.localitate === 'Bucharest') {
        currentLocation.localitate = 'Bucuresti';
      }
      setLocalitate(currentLocation.localitate);
      setJudet(currentLocation.judet);
    }
  };

  const saveAndAlert = () => {
    saveAllInAsyncStorage();
    Alert.alert('Datele au fost salvate.', '', [
      { text: 'OK', onPress: () => navigation.goBack() },
    ]);
  };  

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <SafeAreaView>
        <ScrollView style={styles.container}>
          <Text style={styles.subtitle}>
            Bun venit! Înainte de a putea face sesizări avem nevoie de câteva
            date personale. Acestea sunt necesare pentru înregistrarea oficială
            a sesizărilor.
          </Text>
          <Text style={styles.subtitle}>
            Datele sunt salvate în siguranță pe telefonul tău. Schimbările sunt
            salvate automat.
          </Text>
          <Text style={styles.title}>Nume complet</Text>
          <Input
            placeholder="Scrie aici..."
            label="Nume de familie"
            value={nume}
            style={styles.margin}
            onChangeText={(newNume) => setNume(newNume)}
          />
          <Input
            placeholder="Scrie aici..."
            label="Prenume"
            value={prenume}
            style={styles.margin}
            onChangeText={(newPrenume) => setPrenume(newPrenume)}
          />
          <Input
            placeholder="Scrie aici..."
            label="CNP"
            value={cnp}
            onChangeText={(newCNP) => setCNP(newCNP)}
          />
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
          <Text style={styles.title}>Adresa de domiciliu</Text>
          <Button
            accessoryLeft={<Icon name="navigation-2-outline" />}
            onPress={useCurrentLocation}
            style={styles.margin}
          >
            Foloseşte locația curentă
          </Button>
          <Input
            placeholder="Strada, numărul"
            label="Adresa linie 1"
            value={adresaLinie1}
            style={styles.margin}
            onChangeText={(newAdresaLinie1) => setAdresaLinie1(newAdresaLinie1)}
          />
          <Input
            placeholder="(Dacă e cazul) bloc, scară, apt, etaj"
            label="Adresa linie 2"
            value={adresaLinie2}
            style={styles.margin}
            onChangeText={(newAdresaLinie2) => setAdresaLinie2(newAdresaLinie2)}
          />
          <Input
            placeholder="Scrie aici..."
            label="Localitate"
            value={localitate}
            style={styles.margin}
            onChangeText={(newLocalitate) => setLocalitate(newLocalitate)}
          />
          <Input
            placeholder="Scrie aici..."
            label="Județ sau sector"
            value={judet}
            style={styles.margin}
            onChangeText={(newJudet) => setJudet(newJudet)}
          />
          <Button onPress={saveAndAlert}>Salvează datele</Button>
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />

          {/* Use a light status bar on iOS to account for the black space above the modal */}
          <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
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
  margin: {
    marginBottom: 10,
  },
});
