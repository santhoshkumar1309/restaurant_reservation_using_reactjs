import React from 'react';



const Nonveg = [
  {
    caption: 'BIRYANI',
    ingredients: "Chicken, Fish, Beef, bodied",
    price: "₹160.00"
  },
  {
    caption: 'Grilled Chicken',
    ingredients: "1/2 Half, 1 Full",
    price: "₹380.00"
  },
  {
    caption: 'chilli chicken',
    ingredients: "Dry, Toast, Citrus, Medium-bodied",
    price: "₹120.00"
  },
  {
    caption: 'Fish Fries',
    ingredients: "Crisp, Citrus, Full-bodied",
    price: "₹160.00"
  },
  {
    caption: 'Other Fries',
    ingredients: "Full-bodied",
    price: "₹180.00"
  },
]

const Drinks = () => (
  Nonveg.map(({ caption, ingredients, price }, index) => (
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

export default Drinks;