import MealGridTile from './MealGridTile';

const RenderMealItem = props => {
  return(
    <MealGridTile 
      meal={props.item}
      onSelect={() => {
        props.navigation.navigate('MealDetail', {
          mealId: props.item.id,
          mealTitle: props.item.title
        })             
      }}
    />
  );
};

export default RenderMealItem