import React, { useEffect } from 'react';
import { FlatList } from 'react-native';

import { MEALS } from '../data/meals-data';
import { CATEGORIES } from '../data/categories-data';
import MealGridTile from '../components/MealGridTile';


const CategoryMealScreen = props => {
  const { categoryId } = props.route.params;
  const category = CATEGORIES.find(category => category.id === categoryId);
  const meals = MEALS.filter(meal => meal.categoryIds.includes(category.id));

  useEffect(() => {
    props.navigation.setOptions({ 
      title: category.title,
    });
  }, [category])  

  return (
    <FlatList 
      numColumns={1} 
      data={meals} 
      renderItem={
        ({ item }) => (
          <MealGridTile 
            meal={item}
            category={category}
            onSelect={() => {
              props.navigation.navigate('MealDetail', {
                mealId: item.id,
                categoryId: category.id
              })       
            }}
          />        
        )}
    />
  );
};


export default CategoryMealScreen;