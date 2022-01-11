import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/categories-data';
import { MEALS } from '../data/meals-data';
import MealGridTile from '../components/MealGridTile';


const CategoryMealScreen = props => {
  const { category } = props.route.params;
  const meals = MEALS.filter(meal => meal.categoryIds.includes(category.id));

  useEffect(() => {
    props.navigation.setOptions({ 
      title: category.title,
      headerStyle: {
        backgroundColor: category.backgroundColor,
      },
      headerTintColor: category.fontColor
    });
  }, [props.navigation, category])  

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
                meal: item,
                category: category
              })       
            }}
          />        
        )}
    />



    // <View style={Styles.screen}>
    //   <Text>The Category Meals Screen</Text>
    //   <Text>{category.title}</Text>
    //   <Button title="Go to meal detail" onPress={() => {
    //     props.navigation.navigate('MealDetail');
    //   }} />
    //   <Button title="Go back to categories" onPress={() => {
    //     props.navigation.goBack();
    //   }} />       
    // </View>
  );
};


export default CategoryMealScreen;