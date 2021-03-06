import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../../../helpers/localstorage';
import FinishButton from './FinishButton';
import StartButton from './StartButton';
import { createInProgressRecipesKeys } from '../../../helpers';

export default function MergeButtons({ styles, path, data, history }) {
  const [reload, setReload] = useState(false);
  const doneRecipes = getLocalStorage('doneRecipes');
  const inprogress = getLocalStorage('inProgressRecipes');
  const PROPERTY = path.includes('foods') ? 'meals' : 'cocktails';

  useEffect(() => {
    if (!doneRecipes) {
      setLocalStorage('doneRecipes', []);
      setReload((prev) => !prev);
    }
    if (!inprogress) {
      const MODEL = createInProgressRecipesKeys(PROPERTY, data.id);
      setLocalStorage('inProgressRecipes', MODEL);
    }
  }, [doneRecipes, inprogress, PROPERTY, data.id]);

  if (!path.includes('in-progress')
    && reload && !doneRecipes.some(({ id }) => id === data.id)) {
    return (
      <StartButton
        styles={ styles }
        path={ path }
        data={ data }
        history={ history }
      />
    );
  }
  return reload && !doneRecipes.some(({ id }) => id === data.id) && (
    <FinishButton
      styles={ styles }
      path={ path }
      data={ data }
      history={ history }
    />
  );
}

MergeButtons.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  path: PropTypes.string.isRequired,
  styles: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

MergeButtons.defaultProps = {
  data: {},
};
