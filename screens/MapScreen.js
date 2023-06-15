import React, { useRef, useState } from 'react';
import DetailsModal from '../components/DetailsModal';
import { View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import MapComponent from '../components/MapComponent';
import ZoomButtons from '../components/ZoomButtons';
import { useHuntLocations } from '../hooks/useHuntLocations';
import { useLocation } from '../hooks/useLocation';

export default function MapScreen() {
  const [huntLocations, loading] = useHuntLocations();
  const [initialRegion, setInitialRegion] = useLocation();
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const mapRef = useRef();

  const handleMarkerPress = (location) => {
    setSelectedLocation(location);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const zoomIn = () => {
    const { latitude, longitude } = initialRegion;
    const latitudeDelta = 0.015;
    const longitudeDelta = 0.015;

    if (mapRef.current) {
      mapRef.current.animateToRegion({
        latitude,
        longitude,
        latitudeDelta,
        longitudeDelta,
      });
    }
  };

  const zoomOut = () => {
    const { latitude, longitude } = initialRegion;
    const latitudeDelta = 0.35;
    const longitudeDelta = 0.35;

    if (mapRef.current) {
      mapRef.current.animateToRegion({
        latitude,
        longitude,
        latitudeDelta,
        longitudeDelta,
      });
    }
  };

  return (
    <>
      <View style={styles.container}>
        {initialRegion && (
          <MapComponent
            ref={mapRef}
            initialRegion={initialRegion}
            onRegionChangeComplete={setInitialRegion}
            huntLocations={huntLocations}
            handleMarkerPress={handleMarkerPress}
          />
        )}
        {loading && (
          <View style={styles.translucentOverlay}>
            <View style={styles.loadingContainer}>
              <Image
                source={require('../assets/loading.gif')}
                style={styles.loadingGif}
              />
            </View>
          </View>
        )}
        <ZoomButtons zoomIn={zoomIn} zoomOut={zoomOut} />
      </View>
      {selectedLocation && (
        <DetailsModal
          location={selectedLocation}
          visible={modalVisible}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}

const statusBarHeight = Platform.OS === 'ios' ? Constants.statusBarHeight : 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight,
    backgroundColor: 'rgb(232, 119, 34)',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingGif: {
    width: 100,
    height: 100,
  },
  mapComponent: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
