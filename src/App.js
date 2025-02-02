import { useEffect, useState } from 'react';
import { checkScreenSize, LARGE_BREAKPOINT, menuItems, offers, SMALL_BREAKPOINT } from './helpers';
import { ShapeIcon } from "./shapeIcon";
import logoIcon from "./images/logo.svg";
import rocketIcon from "./images/rocket.svg";
import burgerIcon from "./images/burger.svg";
import closeIcon from "./images/close.svg";
import './styles/App.scss';

function App() {
  const [screenWidth, setScreenWidth] = useState('');

  const updateScreenWidth = (width) => {
    const size = checkScreenSize(width);
    if ( screenWidth !== size) {
      setScreenWidth(size);
    }
  };

  const handleResize = (e) => {
    updateScreenWidth(e.target.innerWidth);
  };

  useEffect(() => {
    updateScreenWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize);
  }, [screenWidth]);

  return (
    <div className="App">
      <nav className='nav container'>
        <a href='/' className='nav__logo' >
          <img src={logoIcon} alt='logo' className='logo__image' />
        </a>
        <div
          id="navbar"
          className={`nav__menu ${screenWidth === SMALL_BREAKPOINT ? 'nav__menu-mobile' : ''}`}
        >
          <ul className='nav__menu-list'>
            {menuItems.map(item => (
              <li key={item.title} className='nav__menu-item'>
                <a href={item.link} className='nav__menu-link'>
                  {item.title}
                </a>
              </li>
            ))}
            <a href='#' className='nav__close-link'>
              <img src={closeIcon} alt='close-menu' />
            </a>
          </ul>
          {ShapeIcon()}
        </div>
        <div className='nav__mobile-menu'>
          <a href='#navbar'>
            <img src={burgerIcon} alt='mobile-menu' />
          </a>
        </div>
      </nav>
      <header className='header container'>
        <div className='header__inner'>
          <h1 className='header__title'>Discover the vast expanses of <span className='text--colored'>space</span></h1>
          <p className='header__description'>Where the possibilities are <span className='text--colored'>endless!</span></p>
          <a href="/" className='header__link'>
            <button className='header__button button button--filled'>Learn more</button>
          </a>
        </div>
      </header>
      <main className='container'>
        <section className='offers'>
          <h2 className='offers__title'>Offers</h2>
          <div className='offers__list'>
            {offers.map((offer, index) => (
              <article
                key={offer.title}
                className={`offers__item ${screenWidth === LARGE_BREAKPOINT && (index === 0 || index === offers.length - 1) ? 'item--wide' : ''}`}
                style={{
                  backgroundImage: `linear-gradient(to left, #00000000, #0F1420C9), url('${offer.backgroundImage}')`
                }}
              >
                <h3 className='offers__item-title'>{offer.title}</h3>
                <p className='offers__item-description'>{offer.description}</p>
                <a href={offer.link} className='offers__item-link'>
                  <button className='offers__item-button button button--transparent'>Learn more</button>
                </a>
              </article> 
            ))}
          </div>
        </section>
        <section className='enticement'>
          <h2 className='enticement__title'>Embark on a space journey</h2>
          <p className='enticement__description'>Travelling into space is one of the most exciting and unforgettable adventures that can change your life forever. And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe. We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. We offer various options for space excursions.</p>
          <a className='enticement__link' href='/'>Read more</a>
        </section>
      </main>
      <footer className='footer container'>
        <div className='footer__inner'>
          <a href='/' className='footer__logo'>
            <img src={rocketIcon} alt='rocket' className='logo__image' />
          </a>
          <span className='footer__text'>Exciting space adventure!</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
