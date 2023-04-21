import api from './api';

const generateOSMLink = async (latitude: string | number, longitude: string | number) => {
  const longUrl = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=18/${latitude}/${longitude}`;

  try {
    const response = await api.get('https://is.gd/create.php', {
      params: {
        format: 'simple',
        url: longUrl,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error shortening the URL:', error);
    // Return the original long URL in case of error
    return longUrl;
  }
};

export default generateOSMLink;
