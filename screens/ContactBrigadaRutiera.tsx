import React, { useEffect, useState } from 'react';
import { Text } from '../components/Themed';

import {
  StyleSheet,
  Linking,
  Platform,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getCurrentLocation } from '../reusables/getCurrentLocation';
import { Button } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';

function getGreeting() {
  const currentHour = new Date().getHours();
  let greeting;

  if (currentHour >= 4 && currentHour < 12) {
    greeting = 'Bună dimineața';
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = 'Bună ziua';
  } else {
    greeting = 'Bună seara';
  }

  return greeting;
}

const getPersonalData = async () => ({
  nume: (await AsyncStorage.getItem('nume')) || '',
  prenume: (await AsyncStorage.getItem('prenume')) || '',
  adresaLinie1: (await AsyncStorage.getItem('adresaLinie1')) || '',
  adresaLinie2: (await AsyncStorage.getItem('adresaLinie2')) || '',
  localitate: (await AsyncStorage.getItem('localitate')) || '',
  judet: (await AsyncStorage.getItem('judet')) || '',
  gen: (await AsyncStorage.getItem('gen')) || '',
});

const ContactBrigadaRutiera: React.FC = () => {
  const [numePrenume, setNumePrenume] = useState('');
  const [adresaLinie1, setAdresaLinie1] = useState('');
  const [judet, setJudet] = useState('');
  const [localitate, setLocalitate] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      const { nume, prenume } = await getPersonalData();
      const location = await getCurrentLocation();

      setNumePrenume(`${nume} ${prenume}`);
      setAdresaLinie1(location ? location.adresaLinie1 : '');
      setJudet(location ? location.judet : '');
      setLocalitate(location ? location.localitate : '');
    };

    fetchData();
  }, []);

  const handlePhoneCall = () => {
    let phoneNumber = '0219544';

    if (Platform.OS === 'ios') {
      phoneNumber = `telprompt:${phoneNumber}`;
    } else {
      phoneNumber = `tel:${phoneNumber}`;
    }

    Linking.openURL(phoneNumber);
  };

  const handleWhatsAppMessage = () => {
    const message = `${getGreeting()}, mă numesc ${numePrenume}, și aș vrea să fac o sesizare în legătură cu mașinile parcate ilegal în zona ${adresaLinie1}. Aș dori prezența unui echipaj la locație pentru a rezolva situația.`;
    const whatsAppUrl = `whatsapp://send?text=${encodeURIComponent(
      message
    )}&phone=+40745093940`;

    Linking.openURL(whatsAppUrl);
  };

  if (!localitate)
    return <ActivityIndicator animating={true} size="large" color="gray" />;

  if (localitate !== 'Bucharest') {
    navigation.goBack();
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Pentru a crește șansele ca sesizarea ta să aibă efect:
      </Text>
      <Text style={styles.step}>1. Sună la Brigada Rutieră</Text>
      <Button onPress={handlePhoneCall}>Sună la 021 9544</Button>
      <Text style={styles.step}>2. Prezintă-te și explică situația:</Text>
      <Text style={styles.quote}>
        "{getGreeting()}, mă numesc {numePrenume}, și aș vrea să fac o sesizare
        în legătură cu mașinile parcate ilegal în zona {adresaLinie1}. Aș dori
        prezența unui echipaj la locație pentru a rezolva situația"
      </Text>
      {judet === 'Sector 1' && (
        <>
          <Text style={styles.step}>
            3. Trimite un mesaj Poliției Locale pe WhatsApp, și trimite-le o
            poză cu situația.
          </Text>
          <Button onPress={handleWhatsAppMessage} status="success">
            Trimite mesaj pe WhatsApp
          </Button>
        </>
      )}
      <Button
        style={styles.closeButton}
        onPress={() => {
          navigation.navigate('Root');
        }}
      >
        Gata, am terminat
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: '5%',
    paddingBottom: '20%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  step: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  quote: {
    fontStyle: 'italic',
  },
  closeButton: {
    marginTop: 60,
  },
});

export default ContactBrigadaRutiera;
