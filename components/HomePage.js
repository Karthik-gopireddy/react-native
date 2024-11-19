import React from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';


function HomePage({ navigation }) {
  const handleStart = () => {
    // Navigate to another screen or handle the start button press
    navigation.navigate('Videos'); // Example: navigating to Videos page
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome to Online Tutorial App</Text>
      
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/img1.jpg')}
          style={styles.image}
        />

      </View>
      
      <View style={styles.buttonContainer}>
        <Button
          title="Click Here"
          onPress={handleStart}
          color="#6200EE"
          style={styles.buttonstyle}
        />
      </View>

      {/* <Video
        source={{ uri: 'https://www.example.com/sample-video.mp4' }}
        style={styles.video}
        controls
        resizeMode="contain"
      /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  imageContainer: {
    flexDirection: 'col',
    alignItems:"center",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 220,
    borderRadius: 8,
    marginBottom:10,
  },
//   video: {
//     width: '100%',
//     height: 200,
//     backgroundColor: '#000',
//     marginBottom: 20,
//     borderRadius: 8,
//   },
  buttonContainer: {
  
    marginBottom:100,
    alignItems: 'center',
  },
 
});

export default HomePage;



