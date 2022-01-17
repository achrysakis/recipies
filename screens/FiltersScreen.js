import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, Switch, Button } from 'react-native';
import ValueSlider from '../components/ValueSlider';
import { useDispatch } from 'react-redux';

import Styles from '../constants/Styles';
import { setMealFilters } from '../store/actions/meals'
import FilterSwitch from '../components/FilterSwitch';

const FiltersScreen = props => {
  const { navigation } = props;
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [duration, setDuration] = useState(300)
  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
      lactoseFree: isLactoseFree,
      duration: duration
    };
    navigation.setParams({ 
      save: appliedFilters
    });
    dispatch(setMealFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegetarian, isVegan, duration, navigation, dispatch]);
  

  const redirect = () => {
    saveFilters();
    props.navigation.navigate('Categories');  
  }

  return (
    <View style={Styles.screen}>
      <Text style={{...Styles.h1,...Styles.textCenter}}>Filters / Preferences</Text>
      <FilterSwitch title="Gluten-free" value={isGlutenFree} valueChange={setIsGlutenFree} />
      <FilterSwitch title="Vegan" value={isVegan} valueChange={setIsVegan} />
      <FilterSwitch title="Vegerarian" value={isVegetarian} valueChange={setIsVegetarian} />
      <FilterSwitch title="Lactose-free" value={isLactoseFree} valueChange={setIsLactoseFree} />
      <ValueSlider value={duration} label="Maximum duration (mins)" step={10} max={300} min={10} valueChange={setDuration} />
      <View style={Styles.button}>
        <Button color="#fff" title="Save" onPress={redirect} />
      </View>
    </View>
  );
};

export default FiltersScreen;
