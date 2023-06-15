import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ZoomButtons = ({ zoomIn, zoomOut }) => {
  return (
    <View style={styles.zoomButtons}>
      <TouchableOpacity onPress={zoomOut}>
        <FontAwesome name='minus' size={30} color='white' />
      </TouchableOpacity>
      <TouchableOpacity onPress={zoomIn}>
        <FontAwesome name='plus' size={30} color='white' />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  zoomButtons: {
    position: 'absolute',
    top: 700,
    right: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
    backgroundColor: '#53A6C4',
    padding: 10,
    borderRadius: 50,
    shadowColor: 'black',
    shadowRadius: 50,
    shadowOpacity: 0.5,
  },
});

export default ZoomButtons;
