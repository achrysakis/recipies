import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux'

import RenderMealItem from '../components/RenderMealItem';

const FavoritesScreen = props => {
  const favoriteMeals = useSelector(state => state.meals);
  const availableMeals = useSelector(state => state.meals.favoriteMeals);

  return (
    <FlatList 
      numColumns={1} 
      data={availableMeals} 
      renderItem={
        ({ item }) => <RenderMealItem item={item} navigation={props.navigation} />
      }
    />
  );
};

export default FavoritesScreen;