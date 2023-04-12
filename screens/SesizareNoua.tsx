import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Text, View } from '../components/Themed';
import { model, RootTabScreenProps } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { Button, Icon, Input } from '@ui-kitten/components';
import * as ImagePicker from 'expo-image-picker';
import { IssueCard } from '../components/IssueCard';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { replaceDiacritics } from '../reusables/replaceDiacritics';
import { getTemplateCounts } from '../reusables/templateCounts';
import { templates } from '../templates';
import { sendEmail } from '../reusables/emailUtils';

export default function SesizareNoua({
  navigation,
}: RootTabScreenProps<'SesizareNoua'>) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [images, setImages] = useState<Array<string>>([]);
  const [firstImageExif, setFirstImageExif] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortedTemplates, setSortedTemplates] = useState(templates);

  const checkLocalStorage = async () => {
    // get all required fields from local storage and show modal if not set
    const localStorageArr = await AsyncStorage.multiGet([
      'nume',
      'prenume',
      'cnp',
      'adresaLinie1',
      'localitate',
      'judet',
    ]);
    // if any of those are empty strings or null, show modal
    if (
      localStorageArr.some(([key, value]) => value === null || value === '')
    ) {
      navigation.navigate('Date Personale');
      return false;
    }
    return true;
  };

  useEffect(() => {
    checkLocalStorage();
  }, []);

  useEffect(() => {
    sortTemplatesByUsage();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
      exif: true,
    });
  
    if (!result.canceled && result.assets) {
      setFirstImageExif(result.assets[0].exif);
      setImages([...images, result.assets[0].uri]);
    }
  };
  
  const shootImage = async () => {
    await ImagePicker.requestCameraPermissionsAsync();
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
    });
  
    if (!result.canceled && result.assets) {
      setImages([...images, result.assets[0].uri]);
    }
  };
  

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
    if (index === 0) {
      setFirstImageExif(undefined);
    }
  };

  const filterSearch = (model: model) => {
    return replaceDiacritics(model.title.toLowerCase()).includes(
      replaceDiacritics(searchQuery.toLowerCase())
    );
  };

  const sortTemplatesByUsage = async () => {
    const counts = await getTemplateCounts();
    const sorted = [...templates].sort(
      (a, b) => (counts[b.title] || 0) - (counts[a.title] || 0)
    );
    setSortedTemplates(sorted);
  };  

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tip sesizare:</Text>
      <Input
        placeholder={`Caută printre tipurile de sesizări`}
        value={searchQuery}
        onChangeText={(nextValue) => setSearchQuery(nextValue)}
        style={{ margin: '5%', marginBottom: 0 }}
      />
      <View style={{ height: 160 }}>
        <SafeAreaProvider>
          <ScrollView horizontal={true} directionalLockEnabled={true}>
            <View style={{ flex: 1, flexDirection: 'row', marginTop: 20 }}>
              {sortedTemplates.filter(filterSearch).map((template, index) => (
                <IssueCard
                  key={template.title}
                  template={template}
                  selected={selectedIndex === index}
                  onPress={() => setSelectedIndex(index)}
                />
              ))}
            </View>
          </ScrollView>
        </SafeAreaProvider>
      </View>
      <Text style={styles.label}>Imagini:</Text>
      <View style={styles.imagesContainer}>
        {images.map((img, index) => (
          <TouchableOpacity
            key={`to-${index}`}
            activeOpacity={0.5}
            onPress={() => removeImage(index)}
          >
            <Image
              key={index}
              source={{ uri: img }}
              style={{ width: 50, height: 50, marginRight: 5 }}
            />
          </TouchableOpacity>
        ))}
        <Button
          style={{ width: 50, height: 50, marginRight: 5 }}
          onPress={pickImage}
        >
          +
        </Button>
        <Button
          style={{ width: 50, height: 50, paddingLeft: 30 }}
          onPress={shootImage}
          accessoryLeft={<Icon name="camera" />}
        >
          &nbsp;
        </Button>
      </View>
      {isLoading ? (
        <ActivityIndicator animating={true} size="large" color="gray" />
      ) : (
        <Button style={{ marginTop: 20, margin: '5%' }} onPress={() => sendEmail(setIsLoading, checkLocalStorage, images, firstImageExif, selectedIndex, templates)}>
          Trimite
        </Button>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginTop: 20,
    marginLeft: '5%',
  },
  title: {
    margin: '5%',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    margin: '10%',
  },
  select: {
    width: '100%',
  },
  label: {
    fontSize: 15,
    marginTop: 5,
    fontWeight: 'bold',
    marginLeft: '5%',
  },
});
