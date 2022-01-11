import React, { useEffect } from 'react';
import { View, Text, Button, Image } from 'react-native';
import Styles from '../constants/Styles';

const MealDetailScreen = props => {
  const { category, meal } = props.route.params;
  const image = { uri: meal.imageUrl };


  useEffect(() => {
    props.navigation.setOptions({ 
      title: meal.title,
      headerStyle: {
        backgroundColor: category.backgroundColor,
      },
      headerTintColor: category.fontColor,
      headerRight: () => (
        <Button
          onPress={() => alert('This is a button!')}
          title="Info"
          color={category.fontColor}
        />
      ),      
    });
  }, [category, meal]);

  return (
    <View style={Styles.screen}>
      <Image source={image} resizeMode="cover" style={Styles.mealImage} />
      <Text style={Styles.h1}>{meal.title}</Text>
      <Button title="Go back all the way to Categories" onPress={() => {
        props.navigation.popToTop();
      }} />        
    </View>
  );
};

export default MealDetailScreen;