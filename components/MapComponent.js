import { Marker, PROVIDER_DEFAULT } from 'react-native-maps';
import MapView from 'react-native-map-clustering';
import React from 'react';

const MapComponent = React.forwardRef(
  (
    { initialRegion, onRegionChange, huntLocations, handleMarkerPress },
    ref
  ) => {
    return (
      <MapView
        ref={ref}
        style={{ flex: 1 }}
        initialRegion={initialRegion}
        onRegionChange={onRegionChange}
        provider={PROVIDER_DEFAULT}
        zoomEnabled={true}
        scrollEnabled={true}
        pitchEnabled={true}
        rotateEnabled={true}
        clusterColor='#E87722'
        animationEnabled={true}
      >
        {huntLocations.map((location) => (
          <Marker
            key={location.hunt_id}
            coordinate={{
              latitude: Number(location.lat),
              longitude: Number(location.long),
            }}
            onPress={() => handleMarkerPress(location)}
          />
        ))}
      </MapView>
    );
  }
);

export default MapComponent;
