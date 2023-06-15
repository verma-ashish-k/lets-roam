import { LETS_ROAM_PW } from '@env';

export const fetchHuntLocations = async () => {
  const response = await fetch(
    `https://www.letsroam.com/api/v1/hunts/get_all_hunts?password=${LETS_ROAM_PW}&compact=1`
  );
  const data = await response.json();
  return data;
};
