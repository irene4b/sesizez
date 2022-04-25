const generateGoogleMapsLink = (latitude: string | number, longitude: string | number) => {
  return `https://www.google.com/maps/@${latitude},${longitude},19.17z`;
};

export default generateGoogleMapsLink;