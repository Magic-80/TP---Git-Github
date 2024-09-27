import './Menu.css';
import HalfPizza from './../../images/HalfPizza.png';

export default function Menu() {
  return (
    <>
        <section id='menu'> 
          <h1> Menu </h1>
            <div className='menu_container'>
              <img src={HalfPizza} alt="" />
              <div className="menu_content">
                  <div className="menu_item">
                    <div className='menu_item_text'>
                      <h2>Classic Pizza</h2>
                      <p>Pizza comes with all toppings that you desire in this section</p>
                    </div>
                    <div className='menu_item_price-text'>
                        <p> 19.99 </p>
                    </div>
                  </div>

                  <div className="menu_item">
                    <div className='menu_item_text'>
                      <h2>Classic Pizza</h2>
                      <p>Pizza comes with all toppings that you desire in this section</p>
                    </div>
                    <div className='menu_item_price-text'>
                        <p> 19.99 </p>
                    </div>
                  </div>

                   <div className="menu_item">
                    <div className='menu_item_text'>
                      <h2>Classic Pizza</h2>
                      <p>Pizza comes with all toppings that you desire in this section</p>
                    </div>
                    <div className='menu_item_price-text'>
                        <p> 19.99 </p>
                    </div>
                  </div>

                  <div className="menu_item">
                    <div className='menu_item_text'>
                      <h2>Classic Pizza</h2>
                      <p>Pizza comes with all toppings that you desire in this section</p>
                    </div>
                    <div className='menu_item_price-text'>
                        <p> 19.99 </p>
                    </div>
                  </div>

                  <div className="menu_item">
                    <div className='menu_item_text'>
                      <h2>Classic Pizza</h2>
                      <p>Pizza comes with all toppings that you desire in this section</p>
                    </div>
                    <div className='menu_item_price-text'>
                        <p> 19.99 </p>
                    </div>
                  </div>
                  <div className="menu_item">
                    <div className='menu_item_text'>
                      <h2>Classic Pizza</h2>
                      <p>Pizza comes with all toppings that you desire in this section</p>
                    </div>
                    <div className='menu_item_price-text'>
                        <p> 19.99 </p>
                    </div>
                  </div>
                  <button className='button_home'> <a> Plus ici </a> </button>
              </div>
            </div>
        </section>

    </>
  );
}



