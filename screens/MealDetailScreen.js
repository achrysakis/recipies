import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import Styles from '../constants/Styles';

import { MEALS } from '../data/meals-data';
import { CATEGORIES } from '../data/categories-data';

const MealDetailScreen = props => {
  const { categoryId, mealId } = props.route.params;
  const category = CATEGORIES.find(category => category.id === categoryId);
  const meal = MEALS.find(meal => meal.id === mealId);

  const image = { uri: meal.imageUrl };
  const [isHeart, setIsHeart] = useState(false);

  useEffect(() => {
    props.navigation.setOptions({ 
      title: meal.title,
      headerRight: () => (
        <Icon
          name={isHeart===true ? 'heart' : 'heart-outline'}
          type='ionicon'
          onPress={() => setIsHeart(!isHeart)}
        />
      ),      
    });
  }, [category, meal, isHeart]);

  return (
    <ScrollView>

      <View style={Styles.screen}>
        <Image source={image} resizeMode="cover" style={Styles.mealImage} height={300} />
        <View style={Styles.mealGridInfoContainer}>
          <Text style={Styles.mealGridInfo}>
            {meal.affordability}
          </Text>
          <Text style={Styles.mealGridInfo}>
            {meal.complexity}
          </Text>
          <Text style={Styles.mealGridInfo}>
            {meal.duration} mins
          </Text>
        </View>   
        <Text style={{...Styles.h1,...Styles.textCenter}}>{meal.title}</Text>

        <View style={Styles.listContainer}>
          <Text style={Styles.h3}>Ingredients</Text>
          {meal.ingredients.map((meal, index) => 
            <View key={"ingredient" + index.toString()}>
              <Text style={Styles.list}>{"* " + meal}</Text>
            </View>
          )}
        </View>
        <View style={Styles.paragraphContainer}>
          <Text style={Styles.h3}>Instructions</Text>
          {meal.steps.map((meal, index) => 
            <View key={"step-" + index.toString()}>
              <Text style={Styles.paragraph}>{(index+1) + ". " + meal}</Text>
            </View>
          )}
        </View>

        <Button title="Go back all the way to Categories" onPress={() => {
          props.navigation.popToTop();
        }} />  
      </View>
    </ScrollView>

  );
};

export default MealDetailScreen;