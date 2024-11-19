
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
const videoData = [
  {
    id: '1',
    title: 'React Native Basics',
    description: 'Learn the fundamentals of React Native and how to get started.',
    thumbnail: require('../assets/img1.jpg'), // Replace with actual thumbnail URLs
    duration: '12:30',
    views: 1250,
    likes: 300,
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    id: '2',
    title: 'State Management in React Native',
    description: 'An introduction to state management techniques in React Native.',
    thumbnail: require('../assets/img1.jpg'),
    duration: '20:45',
    views: 980,
    likes: 240,
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    id: '3',
    title: 'Styling in React Native',
    description: 'Learn about styling and layout techniques in React Native.',
    thumbnail: require('../assets/img1.jpg'),
    duration: '15:00',
    views: 1500,
    likes: 400,
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    id: '4',
    title: 'React Native Basics',
    description: 'Learn the fundamentals of React Native and how to get started.',
    thumbnail:require('../assets/img1.jpg'), // Replace with actual thumbnail URLs
    duration: '12:30',
    views: 1250,
    likes: 300,
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    id: '5',
    title: 'State Management in React Native',
    description: 'An introduction to state management techniques in React Native.',
    thumbnail: require('../assets/img1.jpg'),
    duration: '20:45',
    views: 980,
    likes: 240,
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    id: '6',
    title: 'Styling in React Native',
    description: 'Learn about styling and layout techniques in React Native.',
    thumbnail: require('../assets/img1.jpg'),
    duration: '15:00',
    views: 1500,
    likes: 400,
    videoUrl: 'https://path-to-your-video.mp4',
  },
  // Add more videos as needed
];

function VideosScreen() {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [filteredVideos, setFilteredVideos] = useState(videoData);

  const handleSearch = (text) => {
    setSearch(text);
    setFilteredVideos(
      videoData.filter((video) =>
        video.title.toLowerCase().includes(text.toLowerCase()) ||
        video.description.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  const renderVideoItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.videoCard} 
      onPress={() => navigation.navigate('VideoPlayer', { video: item })}
    >
      <Image source={item.thumbnail} style={styles.thumbnail} />
      <View style={styles.videoInfo}>
        <Text style={styles.videoTitle}>{item.title}</Text>
        <Text style={styles.videoDescription}>{item.description}</Text>
        <Text style={styles.videoDuration}>{item.duration}</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Ionicons name="eye" size={16} color="#888" />
            <Text style={styles.statText}>{item.views} Views</Text>
          </View>
          <View style={styles.statItem}>
            <Ionicons name="heart" size={16} color="#FF6347" />
            <Text style={styles.statText}>{item.likes} Likes</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Tutorial Videos</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search videos..."
        value={search}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredVideos}
        renderItem={renderVideoItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.videoList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}


export default VideosScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  searchBar: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 16,
    marginBottom: 16,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  videoList: {
    paddingBottom: 20,
  },
  videoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3,
  },
  thumbnail: {
    width: 100,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  videoInfo: {
    flex: 1,
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  videoDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
    marginBottom: 4,
  },
  videoDuration: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 6,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  statText: {
    fontSize: 12,
    color: '#888',
    marginLeft: 4,
  },
});

