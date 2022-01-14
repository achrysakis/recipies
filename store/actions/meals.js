export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_MEAL_FILTERS = 'SET_MEAL_FILTERS';

export const setMealFilters = filterSettings => {
  return {
    type: SET_MEAL_FILTERS,
    filters: filterSettings
  };
}

export const toggleFavorite = (id) => {
  return { 
    type: TOGGLE_FAVORITE, 
    mealId: id
  };
};