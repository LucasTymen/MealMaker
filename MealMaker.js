const menu = {
  _meal: (''),
  _price: 0,
  set meal(mealToCheck) {
  if (typeof mealToCheck === 'string') {
    return this._meal = mealToCheck;
  } else {
    console.log('please, write a menu composant');
  }
},
set price(priceToCheck) {
  if (typeof priceToCheck === 'number') {
    return this._price = priceToCheck;
    } else {
      console.log('please, write number');
    }
}
};


console.log(menu);
