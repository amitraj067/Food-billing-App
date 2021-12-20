import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Curry (करी)',
    description: 'Gravy',
    price: 20,
  },
  {
    id: 'm2',
    name: 'Daal (दाल)',
    description: 'Any lentil/legume!',
    price: 15,
  },
  {
    id: 'm3',
    name: 'Achar (अचार)',
    description: 'Pickle',
    price: 5,
  },
  {
    id: 'm4',
    name: 'Dosa (डोसा)',
    description: 'Healthy...and green...',
    price: 25,
  },
  {
    id: 'm5',
    name: 'Idli (इडली)',
    description: 'Steamed rice cakes. Another South Indian Breakfast item.',
    price: 15,
  },
  {
    id: 'm6',
    name: 'Paratha (पराठा)',
    description: 'Indian flat-bread mostly with filling and shallow fried.',
    price: 12,
  },
  {
    id: 'm7',
    name: 'Puri (पूरी)',
    description: 'Deep-fried flatbread',
    price: 5,
  },
  {
    id: 'm8',
    name: 'Kabab (कबाब)',
    description: 'Meat cooked in tandoor.',
    price: 50,
  },
  

];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
