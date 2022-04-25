import { Linking, Share, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Divider, List, ListItem } from '@ui-kitten/components';

type RenderItemType = {
  item: {
    title: string;
    description: string;
    url?: string;
    share?: boolean;
  },
  index: number,
};

const items = [
  {
    title: 'Sugerează un tip nou de sesizare',
    description: 'Adaugă un model de sesizare pe Github Issues',
    url: 'https://github.com/alexbulintis/sesizez/issues',
  },
  {
    title: 'Adaugă un oraș nou',
    description: 'Ajută-ne cu adrese de email ale autorităților din orașul tău',
    url: 'https://github.com/alexbulintis/sesizez/issues',
  },
  {
    title: 'Contribuie la codul aplicației',
    description: 'Oricine poate îmbunătăți codul aplicației',
    url: 'https://github.com/alexbulintis/sesizez',
  },
  {
    title: 'Distribuie aplicația',
    description: 'Distribuie aplicația prietenilor tăi',
    share: true,
  }
]

export default function TabTwoScreen() {
  const renderItem = ({ item, index }: RenderItemType) => (
    <ListItem
      title={item.title}
      description={item.description}
      onPress={() => {
        if (item.url) {
          Linking.openURL(item.url);
        } else if (item.share) {
          Share.share({
            message: 'TODO',
          });
        }
      }}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sesizez</Text>
      <Text style={styles.subtitle}>Aplicație open-source susținută de Eumeo Tech și comunitate. Poți și tu să contribui!</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <List
        style={styles.list}
        data={items}
        ItemSeparatorComponent={Divider}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    marginTop: 5,
    marginBottom: 10,
    textAlign: 'center',
  },
  list: {
    maxHeight: 400,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    margin: '10%',
  },
});
