const menu = {
  _meal: "",
  _price: 0,
  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      return (this._meal = mealToCheck);
    } else {
      console.log("please, write a menu composant");
    }
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      return (this._price = priceToCheck);
    } else {
      console.log("please, write number");
    }
  },
  get todaySpecial() {
    if (this._meal && this._price) {
      return `Today’s Special meal is ${this._meal} for ${this._price} €!`;
    } else {
      return "Meal or price was not set correctly!";
    }
  },
};
menu.meal = "menu big mac veggie";
menu.price = 12;

console.log(menu.todaySpecial);

// console.log(menu);
