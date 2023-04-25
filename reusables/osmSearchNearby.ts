import api from './api';

export const osmSearchNearby = async (props: {
  lat: number;
  lng: number;
  query: string;
}): Promise<any[]> => {
  const { lat, lng, query } = props;
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${query}&viewbox=${
    lng - 0.01
  },${lat + 0.01},${lng + 0.01},${lat - 0.01}&bounded=1&addressdetails=1`;

  try {
    const response = await api.get(url, {
      headers: {
        'accept-language': 'ro,en',
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
