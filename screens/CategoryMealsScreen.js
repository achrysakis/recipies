import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux'

import { CATEGORIES } from '../data/categories-data';
import RenderMealItem from '../components/RenderMealItem';

const CategoryMealScreen = props => {
  const { categoryId } = props.route.params;
  const category = CATEGORIES.find(category => category.id === categoryId);

  const availableMeals = useSelector(state => state.meals.filteredMeals);
  const meals = availableMeals.filter(meal => meal.categoryIds.includes(category.id));

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
        ({ item }) => <RenderMealItem item={item} navigation={props.navigation} />
      }
    />
  );
};


export default CategoryMealScreen;