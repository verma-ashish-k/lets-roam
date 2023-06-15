import { useState, useEffect } from 'react';
import { fetchHuntLocations } from '../api/LetsRoamAPI';

export const useHuntLocations = () => {
  const [huntLocations, setHuntLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchHuntLocations();
        setHuntLocations(data);
      } catch (error) {
        console.error('Error fetching hunt locations:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return [huntLocations, loading];
};
