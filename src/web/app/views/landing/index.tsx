import React from 'react';
import {
  View,
  StyleSheet,
  useWindowDimensions,
  ImageBackground,
  Text,
  Image
} from 'react-native';
import { useNavigate } from 'react-router';

const Home = (props) => {
  const { width, height } = useWindowDimensions();
  const nav = useNavigate();

  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    stanley: {
      height: 380, 
      width: 960, 
      maxWidth: '100%',
      resizeMode: 'contain',
      top: 0, 
      position: 'absolute', 
      shadowColor: '#202020',
      shadowOffset: { width: 0, height: 0 },
      shadowRadius: 5,
    },
    footer: {
      display: 'flex',
      bottom: 10,
      width: width,
      position: 'absolute',
      backgroundColor: "#000000c0",
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    leftText: {
      display: 'flex',
      textAlign: 'left',
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      margin: 'auto'
    },
    rightText: {
      fontWeight: '100',
      display: 'flex',
      textAlign: 'right',
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      margin: 'auto'
    }
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode={'cover'}
        style={styles.image}
        source={require('../../../public/COVER.png')}
      >
        <Image
          source={require('../../../public/completed-mock.png')}
          style={styles.stanley}
        />
        <View style={styles.footer}>
          <Text style={styles.leftText}>
            STUDY
          </Text>
          <Text style={styles.rightText}>
            LEAD
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Home;