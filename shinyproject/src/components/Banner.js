import { useLocation } from 'react-router-dom';
import './Banner.css';

function Banner() {
    const currentLocation = useLocation();
    
    return (
        <section className='banner'>
            <div className="overlay">
                {currentLocation.pathname === '/' && <div className='banner-text'>At home, everywhere, and anywhere</div>}
           </div>
        </section>
    );
}

export default Banner