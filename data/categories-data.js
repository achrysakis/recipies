import Category from "../models/category";
import Colors from '../constants/Colors';

export const CATEGORIES = [
  new Category('c1', 'Italian', '#f5428d', Colors.fonts.alternate),
  new Category('c2', 'Quick & Easy', '#f54242', Colors.fonts.alternate),
  new Category('c3', 'Hamburgers', '#f5a442', Colors.fonts.alternate),
  new Category('c4', 'German', '#f5d142', Colors.fonts.primary),
  new Category('c5', 'Light & Lovely', '#368dff', Colors.fonts.alternate),
  new Category('c6', 'Exotic', '#41d95d', Colors.fonts.primary),
  new Category('c7', 'Breakfast', '#9eecff', Colors.fonts.primary),
  new Category('c8', 'Asian', '#b9ffb0', Colors.fonts.primary),
  new Category('c9', 'French', '#ffc7ff', Colors.fonts.primary),
  new Category('c10', 'Summer', '#47fced', Colors.fonts.primary)
];
