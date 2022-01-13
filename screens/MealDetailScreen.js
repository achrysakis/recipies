import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import Styles from '../constants/Styles';
import Unorderedlist from 'react-native-unordered-list';
import { useSelector, useDispatch } from 'react-redux'
import { toggleFavorite } from '../store/actions/meals';

const MealDetailScreen = props => {
  const { mealId } = props.route.params;

  const allMeals = useSelector(state => state.meals.meals);
  const allFavorites = useSelector(state => state.meals.favoriteMeals);

  const meal = allMeals.find(meal => meal.id === mealId);
  const favoriteMeal = allFavorites.find(meal => meal.id === mealId);

  const image = { uri: meal.imageUrl };

  const dispatch = useDispatch();
  const toggleFavoriteHandler = useCallback(() => {
    dispatch(
      toggleFavorite(mealId)
    );
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setOptions({ 
      title: meal.title,
      headerRight: () => (
        <Icon
          name={(typeof favoriteMeal !== "undefined")==true ? 'heart' : 'heart-outline'}
          type='ionicon'
          onPress={toggleFavoriteHandler}
        />
      ),      
    });
  }, [meal, favoriteMeal, toggleFavoriteHandler]);

  return (
    <ScrollView>

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
      <View style={Styles.screen}>
        <Text style={{...Styles.h1,...Styles.textCenter}}>{meal.title}</Text>

        <View style={Styles.listContainer}>
          <Text style={Styles.h3}>Ingredients</Text>
          {meal.ingredients.map((meal) => 
            <Unorderedlist key={meal}>
              <Text style={Styles.list}>{meal}</Text>
            </Unorderedlist>
          )}
        </View>
        <View style={Styles.paragraphContainer}>
          <Text style={Styles.h3}>Instructions</Text>
          {meal.steps.map((meal, index) => 
            <View key={meal}>
              <Text style={Styles.paragraph}>{(index+1) + ". " + meal}</Text>
            </View>
          )}
        </View>
      </View>
    </ScrollView>

  );
};

export default MealDetailScreen;