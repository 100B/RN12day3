import React from 'react';
import type {Node} from 'react';
import {
  ScrollView,
  Image,
  Text,
  View,
  StyleSheet,
} from 'react-native';


import Heading from './src/components/Heading';
import Content from './src/components/Content';
import photo1 from './images/photo1.png';
import Content2 from './src/components/Content2';




const App: () => Node = () => {
    return (
    <ScrollView>
      <Heading />
      <Content />
      <Image source={photo1}/>
      <Content2 />
      
    </ScrollView>
  );
};



export default App;
