import productA from '../assets/productA.jpg';
import productB from '../assets/productB.jpg';
import productC from '../assets/productC.jpg';

import {Link} from 'react-router-dom';
export default function Home(){
    return(
        <div className="home">
            <section className="hero">
                <div className='container'>
                <h1>Welcome to Exide store !</h1>
                <p>Your trusted partner for quality products.</p>
                <Link to='/products'><button>Shop now</button></Link></div>
                      
            </section>
            <section className="featured">
                <div className='container'>
                <h2>Featured products</h2>
                <div className="featured-grid">
                    <div className="featured-card"><Link to='/products'><img src={productA} alt='Product A'/></Link>
                    <p>Batteries</p></div>
                    <div className="featured-card"><Link to='/products'><img src={productB} alt='Product B'/></Link><p>Inverters</p></div>
                    <div className="featured-card"><Link to='/products'><img src={productC} alt='Product C'/></Link><p>Battery case</p></div>
                    </div>
                </div>
            </section>
            <section className="about">
                <h2>About us</h2>
                <p>At Exide store, we deliver high-quality products to make your
          life easier. Customer satisfaction is our top priority.</p>
            </section>
            
            
        </div>
    );
}
