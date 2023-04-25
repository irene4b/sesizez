import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Platform,
} from 'react-native';
import { Button } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';

const RecommendApp: React.FC = () => {
  const navigation = useNavigation();

  const handleShareApp = () => {
    const message = `Salut, îți recomand să încerci această aplicație pentru a sesiza mașinile parcate ilegal, gropi în asfalt, și multe alte nereguli. Totul fără să fie nevoie să-ți faci cont sau să scrii mail-uri lungi. Descarcă aplicația de aici: https://sesizez.app`;
    const shareUrl = Platform.select({
      ios: `sms:&body=${encodeURIComponent(message)}`,
      android: `sms:?body=${encodeURIComponent(message)}`,
    });

    Linking.openURL(shareUrl!);

    navigation.navigate('Root');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Felicitări, ai realizat 5 sesizări!</Text>
      <Text style={styles.step}>
        Vrei să pui și mai multă presiune pe autorități, pentru a face orașul
        mai plăcut? Atunci invită 5 prieteni să sesizați împreună.
      </Text>
      <Button onPress={handleShareApp}>Trimite invitații</Button>
    </View>
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
});

export default RecommendApp;
