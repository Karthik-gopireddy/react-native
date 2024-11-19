import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';

import Login from "./components/Login"
import Register from "./components/Register"
import UsersList from "./components/UsersList"

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VideosScreen from './components/VideosScreen';
import VideoPlayerScreen from './components/VideoplayerScreenn';

const Stack = createStackNavigator();


const slides = [
  {
    key: 1,
    title: 'Authentication',
    Steps: "Step-1",
    text: 'You need to Register and Login',
    image: require('./assets/img1.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Tutorials',
    Steps: "Step-2",
    text: 'Choose Tutorials',
    image: require('./assets/img1.jpg'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Videos and Documents',
    Steps: "Step-3",
    text: 'Purchase Course and Enjoy the tutorials',
    image: require('./assets/img1.jpg'),
    backgroundColor: '#22bcb5',
  }
];


function App() {
  const [showRealApp, setShowRealApp] = useState(false);
  const [screen, setScreen] = useState("Register");
  const _renderItem = ({ item }) => {
    return (


      <ImageBackground source={require("./assets/bg.png")} style={styles.bgImg}>
        <View style={[styles.slide]}>
          <Text style={styles.title}>{item.title}</Text>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.step}>{item.Steps}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
        {/* <NavigationContainer>
          <Stack.Navigator initialRouteName="Videos">
            <Stack.Screen name="Videos" component={VideosScreen} />
            <Stack.Screen name="VideoPlayer" component={VideoPlayerScreen} options={{ title: 'Video Player' }} />
          </Stack.Navigator>
        </NavigationContainer> */}
      </ImageBackground>
    );
  }
  const _onDone = () => {
    setShowRealApp(true)
  }
  if (showRealApp) {
    if (screen === "Register") {
      return <Register setScreen={(text) => setScreen(text)} />;
    } else if (screen === "Login") {
      return <Login setScreen={(text) => setScreen(text)} />
    } else if (screen === "UsersList") {
      return <UsersList />
    }
  } else {
    return <AppIntroSlider renderItem={_renderItem} data={slides} onDone={_onDone} />;
  }
}


export default App;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  title: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",

  },
  text: {
    fontSize: 20,
    color: "white"
  },
  step: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: -80,
  },
  image: {
    margin: 10,
    width: "95%",
    height: 300,
    borderRadius: 20
  },
  bgImg: {
    width: "100%",
    height: "100%"
  }

})

