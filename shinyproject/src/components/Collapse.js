import React, { useState } from 'react';
import './Collapse.scss';

function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='collapse'>
            <button onClick={toggleCollapse} className='collapse-button'>
                {title}
                <span className={`arrow ${isOpen ? 'down' : 'right'}`}></span>
                {console.log('Arrow rendered with class:', isOpen ? 'down' : 'right')}
            </button>
            {isOpen && <div className='collapse-content'>{children}</div>}
        </div>
    );
}

export default Collapse;
