import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { useThemeColor } from './components/Themed';

export default function App() {
  const colorScheme = useColorScheme();
  const backgroundColor = useThemeColor('background');
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider
        style={{
          backgroundColor,
        }}
      >
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider
          {...eva}
          theme={colorScheme === 'dark' ? eva.dark : eva.light}
        >
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </ApplicationProvider>
      </SafeAreaProvider>
    );
  }
}
