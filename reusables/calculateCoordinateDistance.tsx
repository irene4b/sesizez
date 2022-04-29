type Coordinate = {
  lat: number;
  lng: number;
}

export const calculateCoordinateDistance = (set1: Coordinate, set2: Coordinate) => {
  const R = 6371e3; // metres
  const φ1 = set1.lat * Math.PI / 180;
  const φ2 = set2.lat * Math.PI / 180;
  const Δφ = (set2.lat - set1.lat) * Math.PI / 180;
  const Δλ = (set2.lng - set1.lng) * Math.PI / 180;

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}
