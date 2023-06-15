import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

const DEFAULT_LOCATION = {
  latitude: 51.0447,
  longitude: -114.0719,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export const useLocation = () => {
  const [location, setLocation] = useState(DEFAULT_LOCATION);

  useEffect(() => {
    const getPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Location permission denied');
        return;
      }

      try {
        const currentLocation = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High,
        });
        setLocation({
          latitude: currentLocation.coords.latitude,
          longitude: currentLocation.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      } catch (error) {
        console.error('Error getting current location:', error);
      }
    };

    getPermissions();
  }, []);

  return [location, setLocation];
};
