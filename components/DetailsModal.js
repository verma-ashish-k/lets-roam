import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function DetailsModal({ location, visible, onClose }) {
  const handleCloseModal = () => {
    onClose();
  };
  const renderStarRating = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = Math.ceil(rating - fullStars);
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <View style={styles.starRating}>
        {[...Array(fullStars)].map((_, index) => (
          <FontAwesome key={index} name='star' style={styles.starIcon} />
        ))}
        {[...Array(halfStars)].map((_, index) => (
          <FontAwesome
            key={index}
            name='star-half-full'
            style={styles.starIcon}
          />
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <FontAwesome key={index} name='star-o' style={styles.starIcon} />
        ))}
      </View>
    );
  };
  return (
    <Modal animationType='fade' visible={visible} transparent={true}>
      <View style={styles.modalBackground}>
        <TouchableOpacity style={styles.modalContainer} activeOpacity={1}>
          <Text style={styles.modalTitle}>{location?.name}</Text>
          <Text style={styles.modalDescription}>{location?.description}</Text>
          <Image
            style={styles.modalImage}
            source={{ uri: location?.huntMediumPhotoURL }}
          />
          {location?.star_rating && (
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>Rating:</Text>
              {renderStarRating(parseFloat(location.star_rating))}
            </View>
          )}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={handleCloseModal}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.40)',
  },
  modalContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    borderRadius: 8,
    padding: 20,
    width: '80%',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#E87722',
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 8,
  },
  modalRating: {
    fontSize: 16,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#53A6C4',
    borderRadius: 4,
    padding: 10,
    alignSelf: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  ratingText: {
    fontSize: 16,
    marginRight: 10,
  },
  starRating: {
    flexDirection: 'row',
  },
  starIcon: {
    fontSize: 20,
    color: 'orange',
  },
});
