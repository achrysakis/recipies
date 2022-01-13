import React from 'react';
import { FlatList, View, Text } from 'react-native';

import { CATEGORIES } from '../data/categories-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = props => {

  return (
    <FlatList 
      numColumns={2} 
      data={CATEGORIES} 
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