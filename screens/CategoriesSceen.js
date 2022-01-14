import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux'

import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = props => {
  const availableMeals = useSelector(state => state.meals.filteredMeals);
  const categories = useSelector(state => state.categories.categories);

  const availableCategories = categories.filter(category => {
    return availableMeals.some(meal => { 
      return meal.categoryIds.includes(category.id)
    });
  });

  return (
    <FlatList 
      numColumns={2} 
      data={availableCategories} 
      renderItem={
        ({ item }) => (
          <CategoryGridTile 
            category={item}
            onSelect={() => {
              props.navigation.navigate('CategoryMeals', {
                categoryId: item.id
              })       
            }}
          />        
        )}
    />
  );
};

export default CategoriesScreen;