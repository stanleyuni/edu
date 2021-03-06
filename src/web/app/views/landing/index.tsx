import React from 'react';
import {
  View,
  StyleSheet,
  useWindowDimensions,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { 
  useNavigate
} from 'react-router-native';

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
      maxWidth: '90%',
      margin: 10,
      resizeMode: 'contain',
      top: 0,
      position: 'absolute',
      shadowColor: '#494949',
      shadowOffset: { width: 0, height: 0 },
      shadowRadius: 5,
      shadowOpacity: 1
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
    },
    comingSoonContainer: {
      borderColor: 'white',
      borderWidth: 3,
      width: 400,
      maxWidth: width - 10,
      backgroundColor: "#000000c0",
      padding: 10,
      marginBottom: 250,
      margin: 'auto',
      flexDirection: 'column',
      flexWrap: 'wrap'
    },
    comingSoon: {
      color: "white",
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
    },
    diploma: {
      color: 'white',
      fontSize: 25,
      fontWeight: '100',
      textAlign: 'center',
      fontStyle: 'italic'
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
        <TouchableOpacity style={styles.comingSoonContainer} onPress={() => nav('/coming-soon')}>
          <View>
            <Text style={styles.comingSoon}>
              COMING SOON
            </Text>
            <Text style={styles.diploma}>
              Diploma of Arts
            </Text>
          </View>
        </TouchableOpacity>
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