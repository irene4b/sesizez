import { model } from '../types';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export const IssueCard = ({ template, selected, onPress }: { template: model, selected: boolean, onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={selected ? styles.cardSelected : styles.card}>
        <Text style={styles.title}>{template.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#3366FF',
    padding: 10,
    marginLeft: 15,
    borderRadius: 10,
    width: 150,
    height: 120,
  },
  cardSelected: {
    backgroundColor: '#96CE08',
    padding: 10,
    marginLeft: 15,
    borderRadius: 10,
    width: 150,
    height: 120,
  },
  title: {
    fontSize: 19,
    fontWeight: "600",
    color: '#fff',
  },
});

