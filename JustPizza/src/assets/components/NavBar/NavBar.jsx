import './navBar.css';

function NavBar()
{
    return (
        <>
            <nav className='nav_bar'>
                <ul className='nav_links'>
                    <li><a href="#home_page"> Acceuil </a></li>
                    <li><a href="#history"> A Propos de nous </a></li>
                    <li><a href="#menu"> Menu </a></li>
                    <li><a href="#contactPage"> Contact </a></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar