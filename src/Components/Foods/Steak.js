import React from 'react';
import styled from 'styled-components';

const SteakWrapper = styled.div`

.menu__flex { 
    display: flex; 
    justify-content: space-between;

    .menu__title { 
      h3 { 
     text-transform: uppercase;   
      color: var(--darkGold);
      font-family: "Oswald", sans-serif;
      font-size: 24px;
      font-weight: 400;
      margin-bottom: 33px;
      }
    }
  }


  .menu__item .items {
    width: 300px;
    /* border: 1px solid red; */
    margin-bottom: -40px;
      .menu__caption { 
      text-transform: uppercase;
      font-family: "Cabin", sans-serif;
      font-weight: 700;
      font-size: 15px;
      color: #0c0901;
      margin-bottom: 10px;
      text-align: left;
    }
    .menu__item__flex {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-top: -14px;
    

    .menu__ingredients { 
      font-size: 13px;
      text-transform: none;
      font-weight: 400;
      color: #484745;
    }

    .menu__price { 
      font-family: "Cabin", sans-serif;
      font-weight: 700;
      font-style: italic;
      font-size: 14px;
      color: #bfa760;
    }
   }
  }


`


const Veg = [
  {
    caption: 'Roast',
    ingredients: "Egg. Chicken. Special masala",
    price: "₹60.00"
  },
  {
    caption: 'Puri',
    ingredients: "Chola Poori, Paneer Puri ",
    price: "₹25.00"
  },
  {
    caption: 'Idli-Sambar',
    ingredients: "Cooked Rice Idli, Idli Curry, Kanchipuram Idli,",
    price: "₹15.00"
  },
  {
    caption: 'Biryani',
    ingredients: "Vegetable, Mushroom.",
    price: "₹110.00"
  },
  {
    caption: 'Rice(Unlimited)',
    ingredients: "Karuveppilai , Kothamalli Pudina",
    price: "₹60.99"
  },
]

const Steak = () => (
  Veg.map(({ caption, ingredients, price }, index) => (

    <SteakWrapper key={index}>
      <div className="items">
        <h3 className="menu__caption">
          {caption}
        </h3>
        <div className="menu__item__flex">
          <div className="menu__ingredients"><span>{ingredients}</span></div>
          <p className="menu__price">{price}</p>
        </div>
      </div>
    </SteakWrapper >
  ))
)

export default Steak;