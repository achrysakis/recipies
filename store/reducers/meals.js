import { MEALS } from "../../data/meals-data";
import { TOGGLE_FAVORITE, SET_MEAL_FILTERS} from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      var index = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
      if (index === -1) {
        const updatedFavMeals = state.favoriteMeals.concat(
          state.meals.find(meal => meal.id === action.mealId)
        );
        return { ...state, favoriteMeals: updatedFavMeals}
      } else {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(index, 1);
        return { ...state, favoriteMeals: updatedFavMeals}
      }
    case SET_MEAL_FILTERS:
      const appliedFilters = action.filters;
      const updatedFilteredMeals = state.meals.filter(meal => {
        if ((appliedFilters.glutenFree && !meal.isGlutenFree) ||
            (appliedFilters.vegan && !meal.isVegan) ||
            (appliedFilters.vegetarian && !meal.isVegetarian) ||
            (appliedFilters.lactoseFree && !meal.isLactoseFree)) {
          return false;
        }
        return true;
      });
      return {...state, filteredMeals: updatedFilteredMeals}
    default:
      return state;
  }
};

export default mealsReducer;