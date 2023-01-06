import axios from 'axios';
import { Alert } from 'react-native';
import { reportedLocation } from '../types';

type Props = {
  lat: number;
  lng: number;
};

export const osmReverseLookup = async (
  props: Props
): Promise<reportedLocation> => {
  const { lat, lng } = props;
  const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`;
  const response = await axios.get(url, {
    headers: {
      'accept-language': 'en-US',
    },
  });

  if (!response.data.address) {
    Alert.alert('Nu s-a putut găsi adresa');
    throw new Error('Nu s-a putut găsi adresa');
  }

  console.log(response.data.address);

  let adresaLinie1 = '';
  if (response.data.address.road)
    adresaLinie1 += `${response.data.address.road} `;
  if (response.data.address.house_number)
    adresaLinie1 += `nr. ${response.data.address.house_number}`;

  // adauga reper
  if (
    response.data.addresstype === 'building' &&
    response.data.address.building
  )
    adresaLinie1 += ` (pe langa ${response.data.address.building})`;
  else if (response.data.address.shop)
    adresaLinie1 += ` (pe langa ${response.data.address.shop})`;
  else if (response.data.address.amenity)
    adresaLinie1 += ` (pe langa ${response.data.address.amenity})`;
  else {
    adresaLinie1 += ``;
  }

  let city = '';
  if (response.data.address.city) city = response.data.address.city;
  if (response.data.address.town) city = response.data.address.town;
  if (response.data.address.village) city = response.data.address.village;

  let county = '';
  if (response.data.address.county) county = response.data.address.county;
  if (response.data.address.city_district)
    county = response.data.address.city_district;
  else if (response.data.address.district)
    county = response.data.address.district;

  //

  return {
    adresaLinie1,
    adresaLinie2: '',
    localitate: city,
    judet: county,
    lat,
    lng,
  };
};
