import React, { useMemo, useRef, useState } from 'react';
import { Appbar, IconButton, Badge } from 'react-native-paper';
import { Platform, StyleSheet, View } from 'react-native';
import { useNavigate, useLocation } from 'react-router-native';
import { useDispatch, useStore } from 'react-redux';

const AppBar = ({ theme, logged_in }) => {
  const styles = StyleSheet.create({
    hide_button: {
      opacity: 0
    },
    appBar: {
      shadowColor: "rgba(0, 0, 0, 0.24) 0px 4px 4px 0px"
    },
    show_button: {
      margin: Platform.OS == 'web' ? 25 : 5
    },
    badge: {
      position: 'absolute',
      top: Platform.OS == 'web' ? 25 : 4,
      left: Platform.OS == 'web' ? 20 : 0
    },
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  });
 
  const nav = useNavigate();
  const loc = useLocation();

  return (
    <></>
    // <Appbar style={styles.appBar} theme={theme}>
    //   <Appbar.Content titleStyle={{ alignSelf: 'flex-start' }} title="Stanley University"></Appbar.Content>
    // </Appbar>
  );
}

export default AppBar;