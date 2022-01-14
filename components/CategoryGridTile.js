import React from 'react';
import { View, Text, TouchableOpacity, Platform, TouchableNativeFeedback, ImageBackground } from 'react-native';
import Styles from '../constants/Styles';

const CategoryGridTile = props => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === 'android') {
    TouchableComponent = TouchableNativeFeedback;
  }

  const image = { uri: props.category.imageUrl };
  
  return (
    <View style={Styles.categoryGridItemContainer}>
      <TouchableComponent 
        accessibilityRole="link"
        activeOpacity={0.5}      
        style={Styles.flex}
        onPress={props.onSelect}
      >
        <ImageBackground source={image} resizeMode='cover' style={Styles.categoryGridImage}>
          <View style={Styles.categoryGridItem}>
            <Text style={Styles.categoryGridTitle} numberOfLines={2}>{props.category.title}</Text>
          </View>          
        </ImageBackground>        


      </TouchableComponent>   
    </View>
  );
};

export default CategoryGridTile;