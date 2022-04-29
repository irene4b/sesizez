const generateOSMLink = (latitude: string | number, longitude: string | number) => {
  return `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=18/${latitude}/${longitude}`
};

export default generateOSMLink;