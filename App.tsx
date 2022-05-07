import { StatusBar } from 'expo-status-bar';
import { ColorSchemeName } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { useThemeColor } from './components/Themed';

const Content = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  return (
    <SafeAreaProvider
      style={{
        backgroundColor: useThemeColor('background'),
      }}
    >
      <Navigation colorScheme={colorScheme} />
      <StatusBar />
    </SafeAreaProvider>
  );
};

export default function App() {
  const colorScheme = useColorScheme();
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider
          {...eva}
          theme={colorScheme === 'dark' ? eva.dark : eva.light}
        >
          <Content colorScheme={colorScheme} />
        </ApplicationProvider>
      </>
    );
  }
}
