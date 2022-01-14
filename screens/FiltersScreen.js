import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, Switch, Button } from 'react-native';
import { useDispatch } from 'react-redux';

import Styles from '../constants/Styles';
import Colors from '../constants/Colors';
import { setMealFilters } from '../store/actions/meals'


const FilterSwitch = props => {
  return (
    <View style={Styles.filterContainer}>
      <Text style={Styles.filterLabel}>{props.title}</Text>
      <Switch 
        style={Styles.filterSwitch} 
        trackColor={{ true: Colors.backgrounds.primary }}
        onValueChange={newValue => props.valueChange(newValue)}
        value={props.value}          
      />
    </View>    
  )
}

const FiltersScreen = props => {
  const { navigation } = props;
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
      lactoseFree: isLactoseFree
    };

    dispatch(setMealFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegetarian, isVegan, dispatch]);
  

  useEffect(() => {
    navigation.setParams({ 
      save: saveFilters()
    });
  }, [saveFilters]);  

  const redirect = () => {
    props.navigation.navigate('Categories')       
  }

  return (
    <View style={Styles.screen}>
      <Text>{}</Text>
      <Text style={{...Styles.h1,...Styles.textCenter}}>Filters / Preferences</Text>
      <FilterSwitch title="Gluten-free" value={isGlutenFree} valueChange={setIsGlutenFree} />
      <FilterSwitch title="Vegan" value={isVegan} valueChange={setIsVegan} />
      <FilterSwitch title="Vegerarian" value={isVegetarian} valueChange={setIsVegetarian} />
      <FilterSwitch title="Lactose-free" value={isLactoseFree} valueChange={setIsLactoseFree} />
      <View style={Styles.button}>
        <Button color="#fff" title="Save" onPress={redirect} />
      </View>
    </View>
  );
};

export default FiltersScreen;
