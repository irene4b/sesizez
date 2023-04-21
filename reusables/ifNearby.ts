import { calculateCoordinateDistance } from "./geo";
import { osmSearchNearby } from "./osmSearchNearby";

export const ifSchoolNearby = async (
  lat: number,
  lng: number,
  callback: (schoolName: string) => string
): Promise<string> => {
  const schoolsNearby = await osmSearchNearby({ lat, lng, query: 'school' });

  for (const school of schoolsNearby) {
    console.log(school);
    const distance = calculateCoordinateDistance(
      { lat, lng },
      { lat: school.lat, lng: school.lon }
    );

    if (distance <= 200) {
      return school.address.amenity ? callback(school.address.amenity) : '';
    }
  }

  return "";
};

export const ifMetroStationNearby = async (
  lat: number,
  lng: number,
  callback: (stationName: string) => string
): Promise<string> => {
  const metroStationsNearby = await osmSearchNearby({ lat, lng, query: 'subway entrance' });

  for (const station of metroStationsNearby) {
    const distance = calculateCoordinateDistance(
      { lat, lng },
      { lat: station.lat, lng: station.lon }
    );

    if (distance <= 200) {
      return station.address.railway ? callback(station.address.railway) : '';
    }
  }

  return "";
};