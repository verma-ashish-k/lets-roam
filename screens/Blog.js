import React, { useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, Text, View, Image } from 'react-native';
import logo from '../assets/logo-stacked.png';
import * as Font from 'expo-font';

const LETS_ROAM_BLOG_URL = 'https://letsroam.com/explorer/';

export default function Blog() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        wander: require('../assets/fonts/wander.otf'),
        traverseMedium: require('../assets/fonts/Traverse-Medium.otf'),
      });
    }

    loadFonts();
  }, []);

  const handleLoadStart = () => {
    setIsLoading(true);
  };

  const handleLoadEnd = () => {
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.wander}>Blog</Text>
        <Image source={logo} style={styles.icon} />
      </View>
      <View style={styles.webviewContainer}>
        {isLoading && (
          <Image
            source={require('../assets/loading.gif')}
            style={styles.loadingGif}
          />
        )}
        <WebView
          style={[styles.webview, isLoading ? styles.hidden : null]}
          source={{ uri: LETS_ROAM_BLOG_URL }}
          onLoadStart={handleLoadStart}
          onLoadEnd={handleLoadEnd}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wander: {
    fontSize: 40,
    color: '#6AAEAA',
    marginLeft: 10,
    fontFamily: 'wander',
    lineHeight: 50,
  },
  traverseMedium: {
    fontSize: 18,
    color: '#6AAEAA',
    marginLeft: 10,
    fontFamily: 'traverseMedium',
  },
  container: {
    flex: 1,
    marginTop: 34,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 10,
    marginTop: 20,
  },
  icon: {
    width: 64,
    height: 64,
    resizeMode: 'contain',
  },
  webviewContainer: {
    flex: 1,
    width: '100%',
  },
  webview: {
    flex: 1,
    marginTop: -70,
  },
  loadingGif: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hidden: {
    opacity: 0,
  },
});
