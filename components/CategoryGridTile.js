import React from 'react';
import { View, Text, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';
import Styles from '../constants/Styles';

const CategoryGridTile = props => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === 'android') {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <View style={Styles.categoryGridItemContainer}>
      <TouchableComponent 
        style={Styles.flex}
        onPress={props.onSelect}
      >
        <View style={{...Styles.categoryGridItem, ...{backgroundColor: props.category.backgroundColor}}}>
          <Text style={Styles.categoryGridTitle} numberOfLines={2}>{props.category.title}</Text>
        </View>

      </TouchableComponent>   
    </View>
  );
};

export default CategoryGridTile;