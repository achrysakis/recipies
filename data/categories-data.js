import Category from "../models/category";
import Colors from '../constants/Colors';

export const CATEGORIES = [
  new Category('c1', 'Italian', '#f5428d', Colors.fonts.alternate, "https://www.my-city.gr/wp-content/uploads/2020/01/10-Italian-Fun-Facts-The-Food-Fashion-and-Culture-of-Italy.jpg"),
  new Category('c2', 'Quick & Easy', '#f54242', Colors.fonts.alternate, "https://post.greatist.com/wp-content/uploads/sites/2/2017/06/GRT-12865-22_Insanely_Easy_and_Quick_Healthy_Meals_for_One-732x549-thumbnail.jpg"),
  new Category('c3', 'Hamburgers', '#f5a442', Colors.fonts.alternate,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp5xABd5ig32gxxi8jJtuK4AZc7wEEVbrpwg&usqp=CAU"),
  new Category('c4', 'German', '#f5d142', Colors.fonts.primary,"http://cdn.cnn.com/cnnnext/dam/assets/190715182611-19-germany-dishes-gallery-restricted.jpg"),
  new Category('c5', 'Light & Lovely', '#368dff', Colors.fonts.alternate,"https://cdn2.stylecraze.com/wp-content/uploads/2015/06/9-Nourishing-Veggie-Noodles.jpg"),
  new Category('c6', 'Exotic', '#41d95d', Colors.fonts.primary,"https://www.starpik.com/wp-content/uploads/2020/06/Table-full-of-exotic-food-in-Cyprus-209879.jpg"),
  new Category('c7', 'Breakfast', '#9eecff', Colors.fonts.primary,"https://iamafoodblog.b-cdn.net/wp-content/uploads/2019/02/full-english-7355w-2.jpg"),
  new Category('c8', 'Asian', '#b9ffb0', Colors.fonts.primary,"https://static.onecms.io/wp-content/uploads/sites/19/2017/08/17/GettyImages-545286388-2000.jpg"),
  new Category('c9', 'French', '#ffc7ff', Colors.fonts.primary,"https://www.expatica.com/app/uploads/sites/5/2014/05/french-food-1920x1080.jpg"),
  new Category('c10', 'Summer', '#47fced', Colors.fonts.primary,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEGJfOY8khSUzMFnIhL7Ql-0UJuJHO9HwI8w&usqp=CAU")
];
