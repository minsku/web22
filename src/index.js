import FazerMenu from './assets/fazermenu.json';

const menu = [
  {name: 'Lingonberry jam', price: 4.00},
  {name: 'Mushroom and bean casserole', price: 5.50},
  {name: 'Chili-flavoured wheat', price: 3.00},
  {name: 'Vegetarian soup', price: 4.80},
  {name: 'Pureed root vegetable soup with smoked cheese', price: 8.00}
];

// A 1.kohta

menu.forEach(meal => {
  const regexp = /^[A-ZÖÄÅ]{1}[a-zöäå,A-ZÖÄÅ/0-9()-\s]{4,64}$/;
  const test = regexp.test(meal.name);

  if(!test) {
    console.log(meal.name + ' is not valid');
  } else {
    console.log(meal.name + ' is valid');
  }
});

// A 2.kohta

const priceSorted = menu.sort((a, b) => {
  return b.price - a.price;
});
console.log('Sorted meals', priceSorted);

priceSorted(menu);

//A 3.kohta

const priceFiltered = (array) =>{
  const cheapFood = array.filter((food) => {
    return food.price < 5;
  });
  console.log('price filter', cheapFood);
};
priceFiltered(menu);

//A 4.kohta

const priceRaise = (array, amount) => {
  const priceCalc = (amount / 100 + 1);
  const newPrice = array.map((food) => {
    return {
      name: food.name,
      price: (food.price * priceCalc).toFixed(2),
    };
  });
  console.log('raised prices', newPrice);
};
priceRaise(menu, 15);

//A 5.kohta

const totalCost = (array) => {
  const sum = array.reduce((a,b) => ({price: a.price + b.price}));
  console.log('Whole menu costs: ', sum);
};
totalCost(menu);

//B

const vegan = getParsedMenuFazer.sort((veg) => {
  return {Diets: "Veg"};
});
console.log(vegan);



