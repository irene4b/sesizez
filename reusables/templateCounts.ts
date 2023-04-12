import AsyncStorage from '@react-native-async-storage/async-storage';

export const getTemplateCounts = async () => {
  const countsStr = await AsyncStorage.getItem('templateCounts');
  return countsStr ? JSON.parse(countsStr) : {};
};

export const setTemplateCount = async (templateTitle: string) => {
  const counts = await getTemplateCounts();
  const count = (counts[templateTitle] || 0) + 1;
  counts[templateTitle] = count;
  await AsyncStorage.setItem('templateCounts', JSON.stringify(counts));
};

export const clearTemplateCounts = async () => {
  await AsyncStorage.removeItem('templateCounts');
};
