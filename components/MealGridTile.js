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
    <View style={Styles.mealGridItemContainer}>
      <TouchableComponent 
        accessibilityRole="link"
        activeOpacity={0.5}
        style={Styles.flex}
        onPress={props.onSelect}
      >
        <ImageBackground source={image} resizeMode='cover' style={Styles.mealGridImage}>
          <View style={Styles.mealGridItem}>
            <Text 
              style={Styles.mealGridTitle}
              numberOfLines={2}>
                {props.meal.title}
            </Text>
          </View>          
        </ImageBackground>

        <View style={Styles.mealGridInfoContainer}>
          <Text style={Styles.mealGridInfo}>
            {props.meal.affordability}
          </Text>
          <Text style={Styles.mealGridInfo}>
            {props.meal.complexity}
          </Text>
          <Text style={Styles.mealGridInfo}>
            {props.meal.duration} mins
          </Text>
        </View>     
      </TouchableComponent>   

    </View>
  );
};

export default MealGridTile;