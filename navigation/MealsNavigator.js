import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';

import CategoriesScreen from '../screens/CategoriesSceen';
import CategoryMealScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';

const drawerIcon = props => {
  return(
    {headerLeft: () => (
      <Icon
        name='menu'
        type='ionicon'
        color="#000"
        size={22}
        onPress={() => {props.navigation.toggleDrawer();}}
      />
    )}  
  )
}

const MealsStackNavigator = createNativeStackNavigator();
const MealsStack = props => {
  return (
    <MealsStackNavigator.Navigator 
      screenOptions={
        {
          headerTintColor: Colors.fonts.primary,
          headerStyle: {
            backgroundColor: Colors.backgrounds.alternate,
          }
        }
      }
    >
      <MealsStackNavigator.Screen 
        name="Categories"       
        component={CategoriesScreen} 
        options={{...drawerIcon(props)}}        
      />
      <MealsStackNavigator.Screen 
        name="CategoryMeals"         
        component={CategoryMealScreen}
      />
      <MealsStackNavigator.Screen 
        name="MealDetail"         
        component={MealDetailScreen} 
      />
    </MealsStackNavigator.Navigator>
  );
};

const FavoritesStackNavigator = createNativeStackNavigator();
const FavoritesStack = props => {
  return (
    <FavoritesStackNavigator.Navigator 
      screenOptions={
        {
          headerTintColor: Colors.fonts.primary,
          headerStyle: {
            backgroundColor: Colors.backgrounds.alternate,
          }
        }
      }
    >
      <FavoritesStackNavigator.Screen 
        name="Favorites"       
        component={FavoritesScreen} 
        options={{...drawerIcon(props)}}        
      />
      <FavoritesStackNavigator.Screen 
        name="MealDetail"         
        component={MealDetailScreen} 
      />
    </FavoritesStackNavigator.Navigator>
  );
};

const FiltersStackNavigator = createNativeStackNavigator();
const FiltersStack = props => {
  return (
    <FiltersStackNavigator.Navigator 
      screenOptions={
        {
          headerTintColor: Colors.fonts.primary,
          headerStyle: {
            backgroundColor: Colors.backgrounds.alternate,
          }
        }
      }
    >
      <FiltersStackNavigator.Screen 
        name="Filters"       
        component={FiltersScreen} 
        options={{...drawerIcon(props)}}        
      />
    </FiltersStackNavigator.Navigator>
  );
};


const MainTabsNavigator = createBottomTabNavigator();
const MainTabs = props => {
  return (
    <MainTabsNavigator.Navigator 
      screenOptions={{
        tabBarActiveTintColor: Colors.backgrounds.primary,
        tabBarStyle: { backgroundColor: "#fafafa" },
        headerShown: false
      }}
    >
      <MainTabsNavigator.Screen 
        name="AllMeals" 
        component={MealsStack} 
        options={{ 
          title: "Recipies",
          tabBarIcon: ({ focused }) => {
            let iconName = focused
              ? 'ios-restaurant'
              : 'ios-restaurant-outline';
            let color = focused
              ? Colors.backgrounds.primary
              : ''
            return(
              <Icon
                name={iconName}
                type='ionicon'
                color={color}
                size={28}
              />
            )
          }
        }}
      />
      <MainTabsNavigator.Screen 
        name="AllFavorites" 
        component={FavoritesStack} 
        options={{ 
          title: "Favorites",
          tabBarIcon: ({ focused }) => {
            let iconName = focused
              ? 'heart'
              : 'heart-outline';
            let color = focused
              ? Colors.backgrounds.primary
              : ''
            return(
              <Icon
                name={iconName}
                type='ionicon'
                color={color}
                size={28}
              />
            )
          }
        }}          
      />
    </MainTabsNavigator.Navigator>
  );
}

const DrawerNavigator = createDrawerNavigator();

const Drawer = props => {
  return (
    <NavigationContainer>
      <DrawerNavigator.Navigator 
        screenOptions={{         
          headerShown: false,
          swipeEnabled: false
        }}
        initialRouteName="MainTabs"      
      >
        <DrawerNavigator.Screen 
          options={{ 
            title: "Recipies",
            // headerShown: false,
          }}
          name="MainTabs" 
          component={MainTabs} 
        />
        <DrawerNavigator.Screen 
          options={{ 
            title: "Filters", ...drawerIcon(props)
          }}
          name="FiltersStack" 
          component={FiltersStack} 
        />
      </DrawerNavigator.Navigator>
    </NavigationContainer>
  );
}


export default Drawer;