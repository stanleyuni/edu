import React, { createContext } from 'react';
import { Text } from 'react-native-paper';
import {
  Routes,
  Route
} from 'react-router-native';;

// App components
import Landing from './views/landing';
import ComingSoon from './views/coming-soon';

const AppRoutes = ({ theme, logged_in }) => {
  return (
    <Routes>
      <Route path='/' element={<Landing theme={theme} logged_in={logged_in} />} />
      <Route path='/coming-soon' element={<ComingSoon theme={theme} logged_in={logged_in} />} />
      <Route path='**' element={<Text theme={theme}>There's nothing here!</Text>} />
    </Routes>
  );
}

export default AppRoutes;