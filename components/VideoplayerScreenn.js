// VideoPlayerScreen.js

import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Video from 'react-native-video';

const { width } = Dimensions.get('window');

function VideoPlayerScreen({ route }) {
  const { video } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.videoTitle}>{video.title}</Text>

      <Video
        source={{ uri: video.videoUrl }}
        style={styles.videoPlayer}
        controls
        resizeMode="contain"
      />
      <Text style={styles.description}>{video.description}</Text>
    </View>
  );
}

export default VideoPlayerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  videoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  videoPlayer: {
    width: width - 32,
    height: (width - 32) * (9 / 16), // Aspect ratio of 16:9
    backgroundColor: '#000',
    borderRadius: 8,
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});
