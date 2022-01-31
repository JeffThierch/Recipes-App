import React from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../styles/Footer.css';

const Footer = () => {
  const history = useHistory();
  return (
    <footer data-testid="footer" className="footer">
      <button
        type="button"
        data-testid="drinks-bottom-btn"
        className="button"
        onClick={ () => history.push('/drinks') }
      >
        <img src={ drinkIcon } alt="drink" />
      </button>
      <button
        type="button"
        data-testid="explore-bottom-btn"
        className="button"
        onClick={ () => history.push('/explore') }
      >
        <img src={ exploreIcon } alt="explore" />
      </button>
      <button
        type="button"
        data-testid="food-bottom-btn"
        className="button"
        onClick={ () => history.push('/foods') }
      >
        <img src={ mealIcon } alt="meal" />
      </button>
    </footer>
  );
};

export default Footer;
