import { CATEGORIES } from "../../data/categories-data";

const initialState = {
  categories: CATEGORIES,
};

const categoriesReducer = ( state = initialState, action ) => {
  return state;
};

export default categoriesReducer;