import React, { useEffect } from 'react';
import { FlatList } from 'react-native';

import { MEALS } from '../data/meals-data';
import { CATEGORIES } from '../data/categories-data';
import MealGridTile from '../components/MealGridTile';

const renderMeal = (meal, navigation) => {
  const category = CATEGORIES.find(category => category.id === meal.categoryIds[0]);
  
  return(
    <MealGridTile 
      meal={meal}
      category={category}
      onSelect={() => {
        navigation.navigate('MealDetail', {
          mealId: meal.id,
          categoryId: category.id
        })             
      }}
    />
  );
}

const FavoritesScreen = props => {
  return (
    <FlatList 
      numColumns={1} 
      data={MEALS} 
      renderItem={
        ({ item }) => renderMeal(item, props.navigation)
      }
    />
  );
};

export default FavoritesScreen;