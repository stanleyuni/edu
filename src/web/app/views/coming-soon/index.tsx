import React from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { Divider, Headline, List, Subheading, Surface, Title } from 'react-native-paper';

const ComingSoon = (props) => {
  const { width, height } = useWindowDimensions();

  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    surface: {
      width: width <= 1440 ? width * 0.95 : width * 0.8,
      margin: 'auto',
      padding: 20,
      marginTop: 20,
      marginBottom: 20
    },
    indent: {
      marginLeft: 20,
      marignRight: 20,
    }
  });

  return (
    <View style={styles.container}>
      <Surface theme={props.theme} style={styles.surface}>
        <Headline theme={props.theme}>Diploma of Arts</Headline>
        <Subheading theme={props.theme} style={{ paddingBottom: 10, fontWeight: 100 }}>Two years full time</Subheading>
        <Divider></Divider>
        <Title theme={props.theme} style={{ fontWeight: '300' }}>Year One</Title>
        <Subheading theme={props.theme} style={{ fontWeight: '100' }}>Introduction</Subheading>
        <List.Item
          theme={props.theme}
          title="How to be Successful"
          description="Tactics and Study Methods to be Successful"
        />
        <List.Item
          theme={props.theme}
          title="The University"
          description="An Introduction to the University as an Institution"
        />
        <Subheading theme={props.theme} style={{ fontWeight: '100' }}>Semester One</Subheading>
        <View style={styles.indent}>
          <List.Item
            theme={props.theme}
            title="Pre-calculus"
            description="Algebra, Trigonometry and Functions"
          />
          <List.Item
            theme={props.theme}
            title="Maps of Meaning"
            description="The Architecture of Belief"
          />
          <List.Item
            theme={props.theme}
            title="Ancient European History"
            description="Athens, Jerusalem and Rome"
          />
        </View>
        <Subheading theme={props.theme} style={{ fontWeight: '100' }}>Semester Two</Subheading>
        <View style={styles.indent}>
          <List.Item
            theme={props.theme}
            title="Biology"
            description="Proteins, Sugars, Fatty Acids, Lipids and DNA"
          />
          <List.Item
            theme={props.theme}
            title="Psychology"
            description="Personality and Social Sciences"
          />
          <List.Item
            theme={props.theme}
            title="The Bible"
            description="Introduction to the Holy Bible"
          />
        </View>
        <Divider></Divider>
        <Divider></Divider>
        <Title theme={props.theme} style={{ fontWeight: '300' }}>Year Two</Title>
        <Subheading theme={props.theme} style={{ fontWeight: '100' }}>Semester One</Subheading>
        <View style={styles.indent}>
          <List.Item
            theme={props.theme}
            title="Post Modernism"
            description="Critical Theory, Postmodern Neo-Marxism and the Frankfurt School"
          />
          <List.Item
            theme={props.theme}
            title="Modern European History"
            description="WW1, WW2 and the Cold War"
          />
          <List.Item
            theme={props.theme}
            title="Project Management"
            description="Planning, Communication and Design"
          />
        </View>
        <Subheading theme={props.theme} style={{ fontWeight: '100' }}>Semester Two</Subheading>
        <View style={styles.indent}>
          <List.Item
            theme={props.theme}
            title="Australia"
            description="The Australian Constitution, The Founding Fathers and Australian Culture"
          />
          <List.Item
            theme={props.theme}
            title="Philsophy"
            description="Great Books of the Western Philosophical Tradition"
          />
          <List.Item
            theme={props.theme}
            title="Statistics"
            description="Decisions from data"
          />
        </View>
      </Surface>
    </View>
  );
};

export default ComingSoon;