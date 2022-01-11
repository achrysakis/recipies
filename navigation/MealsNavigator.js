import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoriesScreen from '../screens/CategoriesSceen';
import CategoryMealScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';

const Stack = createNativeStackNavigator();

const MealsNavigator = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={
          {
            headerTintColor: Colors.fonts.primary,
            headerStyle: {
              backgroundColor: Colors.backgrounds.alternate,
            }
          }
        }
      >
        <Stack.Screen 
          name="Categories" 
          options={{
            title: 'Categories'
          }}          
          component={CategoriesScreen} 
        />
        <Stack.Screen 
          name="CategoryMeals" 
          options={{
            title: "Category Meals"
          }}            
          component={CategoryMealScreen} 
        />
        <Stack.Screen 
          name="MealDetail" 
          options={{
            title: "Meal Detail"
          }}           
          component={MealDetailScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MealsNavigator;