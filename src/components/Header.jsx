import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import AplicationContext from '../context/AplicationContext';

function Header({ title, renderExplore }) {
  const { toggleSearchBar } = useContext(AplicationContext);
  return (
    <header>
      <nav>
        <Link to="/profile">
          <img
            data-testid="profile-top-btn"
            src={ profileIcon }
            alt=""
          />
        </Link>
        <h1 data-testid="page-title">{ title }</h1>
        {
          renderExplore && (
            <button type="button" onClick={ toggleSearchBar }>
              <img
                data-testid="search-top-btn"
                src={ searchIcon }
                alt="search"
              />
            </button>
          )
        }
      </nav>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  renderExplore: PropTypes.bool,
};

Header.defaultProps = {
  renderExplore: true,
};

export default Header;
