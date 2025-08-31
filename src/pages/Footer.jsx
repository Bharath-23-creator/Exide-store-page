import {Link} from 'react-router-dom';
export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-about">
                    <h3>Exide store</h3>
                    <p>Providing quality products with trust and reliability.</p>
                </div>
                <div className="footer-links">
                    <h3>Quick links</h3>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/products'>Products</Link></li>
                        <li><Link to='/service'>Service</Link></li>
                        <li><Link to='/cart'>Cart</Link></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h4>Contact us</h4>
                    <p>Email: exidestore@gmail.com</p>
                </div>
                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Exide store. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}