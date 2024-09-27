import './header.css'
import NavBar from '../../components/NavBar/NavBar'


function Header()
{
    return (
        <>
            <header>
                <div className='header-logo'>
                    <img src="/src/assets/images/PizzaIcon.svg" alt="pizza icon" />
                    <p> JustPizza </p>
                </div>
                <NavBar></NavBar>
            </header>
        </>
    )
}

export default Header