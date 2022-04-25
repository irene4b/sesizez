/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('sesizez://')],
  config: {
    screens: {
      Root: {
        screens: {
          SesizareNoua: {
            screens: {
              SesizareNouaScreen: 'one',
            },
          },
          Despre: {
            screens: {
              DespreScreen: 'two',
            },
          },
        },
      },
      'Date Personale': 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
