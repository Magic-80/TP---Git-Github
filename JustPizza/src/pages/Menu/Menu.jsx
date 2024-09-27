import './Menu.css';

import MenuLogo from './../../assets/img/menu.png';
import Pizza from './../../assets/img/HalfPizza.png';

import React from 'react';

export default function Menu() {
  return (
    <>
      <div className="menuContainer">
        {/* <nav className="navbar">
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Specials & Coupons</li>
            <li>Contact Us</li>
          </ul>
        </nav> */}

        <div className="menuContent">
          <div className="pizzaImage">
            <img src={Pizza} alt="A pizza picture" />
          </div>

          <div className="menuDetails">
            <h1 className="menuTitle"><img src={MenuLogo} alt="Image menu " /></h1>
            <div className="pizzaGrid">
              <div className="pizzaItem">
                <h2>Classic Pizza</h2>
                <p>Pizza comes with all toppings that you desire in this section</p>
                <span>$19.99</span>
              </div>

              <div className="pizzaItem">
                <h2>Surprise Pizza</h2>
                <p>Random chance to win a pizza made by Phillipe Etchebest himself</p>
                <span>$1999</span>
              </div>

              <div className="pizzaItem">
                <h2>Pepperoni Pizza</h2>
                <p>Pizza comes with all toppings that you desire in this section</p>
                <span>$21.99</span>
              </div>

              <div className="pizzaItem">
                <h2>Classic Pizza</h2>
                <p>Pizza comes with all toppings that you desire in this section</p>
                <span>$19.99</span>
              </div>

              <div className="pizzaItem">
                <h2>Classic Pizza</h2>
                <p>Pizza comes with all toppings that you desire in this section</p>
                <span>$19.99</span>
              </div>

              <div className="pizzaItem">
                <h2>Classic Pizza</h2>
                <p>Pizza comes with all toppings that you desire in this section</p>
                <span>$19.99</span>
              </div>
            </div>
            <button className="exploreButton">Explore More</button>
          </div>
        </div>
      </div>
    </>
  );
}



