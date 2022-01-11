import React from 'react';
import { View, Text, TouchableOpacity, Platform, TouchableNativeFeedback, ImageBackground } from 'react-native';
import Styles from '../constants/Styles';

const MealGridTile = props => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === 'android') {
    TouchableComponent = TouchableNativeFeedback;
  }

  const image = { uri: props.meal.imageUrl };

  return (
    <View style={{...Styles.mealGridItemContainer,...{backgroundColor: props.category.backgroundColor}}}>
      <TouchableComponent 
        style={Styles.flex}
        onPress={props.onSelect}
      >
        <ImageBackground source={image} resizeMode='cover' style={Styles.mealGridImage}>
        </ImageBackground>
        <View>
          <Text 
            style={{...Styles.mealGridTitle,...{color: props.category.fontColor}}} 
            numberOfLines={2}>
              {props.meal.title}
          </Text>
        </View>
      </TouchableComponent>   
      <View style={Styles.mealGridInfoContainer}>
          <Text style={{...Styles.mealGridInfo, ...{color: props.category.fontColor}}}>
            {props.meal.affordability}
          </Text>
          <Text style={{...Styles.mealGridInfo, ...{color: props.category.fontColor}}}>
            {props.meal.complexity}
          </Text>
          <Text style={{...Styles.mealGridInfo, ...{color: props.category.fontColor}}}>
            {props.meal.duration} mins
          </Text>
        </View>          
    </View>
  );
};

export default MealGridTile;