import './Property.css';

function Property({ title, img, id}) {
    return ( 
        <><div className='property'>{title}
        <img src={img} alt={title} /></div>
        </>
     );
}

export default Property;