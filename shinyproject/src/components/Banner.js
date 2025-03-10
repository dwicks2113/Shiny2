import { useLocation } from 'react-router-dom';
import './Banner.css';

function Banner({ customClass }) {
    const currentLocation = useLocation();
    
    return (
        <section className={`banner${customClass}`}>
            <div className="overlay">
                {currentLocation.pathname === '/' && <div className='banner-text'>At home, everywhere, and anywhere</div>}
           </div>
        </section>
    );
}

export default Banner