import './home.css';
import Header from '../../layout/Header/Header';
import ButtonHome from '../../components/buttonHome/buttonHome';

function Home ()
{
    return (
        <>
            <Header></Header>
            <div className='home_page' id='home_page'>
                <div className='title'>
                    <h1> Pizza Family </h1>
                    <p> people disappoint, but pizza never does.</p>
                    <ButtonHome></ButtonHome>
                </div>
                <div className='home_img'>
                    <img src="/src/assets/images/burger1.svg" alt="home page image"/>
                </div>
           </div>

        </>
    )
}

export default Home