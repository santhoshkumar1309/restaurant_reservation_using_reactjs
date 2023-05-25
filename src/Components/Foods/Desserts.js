import React from 'react';

const desserts = [
  {
    caption: 'COLD CHOCOLATE',
    ingredients: "Creme Anglaise, Vanilla Bean Ice Cream ",
    price: " ₹90.00"
  },
  {
    caption: 'WARM CHOCOLATE ',
    ingredients: "Amarena Cherries, Kirsch Cream",
    price: "₹60.00"
  },
  {
    caption: 'CHEESE CAKE',
    ingredients: "Cheese creme, ice cream, strawberry",
    price: "₹100.00"
  },
  {
    caption: 'APPLE TURNOVER',
    ingredients: "Creme Anglaise, Vanilla Bean Ice Cream",
    price: "₹80.00"
  },
  {
    caption: 'SORBET WITH FRUIT',
    ingredients: "Lemon, organge, strawberry or mango",
    price: "₹120.00"
  },
]


const Desserts = () => (
  desserts.map(({ caption, ingredients, price }, index) => (
    <div className="items" key={index}>
      <h3 className="menu__caption">
        {caption}
      </h3>
      <div className="menu__item__flex">
        <div className="menu__ingredients">{ingredients}</div>
        <p className="menu__price">{price}</p>
      </div>
    </div>
  ))
)

export default Desserts;