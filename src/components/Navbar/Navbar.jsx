import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="btnMenu">
                <div className='btnMenuLine'></div>
                <div className='btnMenuLine'></div>
                <div className='btnMenuLine'></div>
                <div className='mobileMenu'>
                    <a href="#">introduction</a>
                    <a href="#">solution</a>
                    <a href="#">rate plan</a>
                    <a href="#">login</a>
                    <a href="#">apply for free use</a>
                </div>
            </div>
            <div className="logo">
                <img src="img/logo.png"
                    srcSet="img/logo@2x.png 2x,
                            img/logo@3x.png 3x"
                    alt='' />
            </div>
            <div className="menu">
                <ul>
                    <li><a href="#">introduction</a></li>
                    <li><a href="#">solution</a></li>
                    <li><a href="#">rate plan</a></li>
                    <li>|</li>
                    <li><a href="#">login</a></li>
                    <li><a href="#">apply for free use</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;