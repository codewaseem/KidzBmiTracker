import React from 'react';
import propTypes from 'prop-types';

const Button = ({ buttonText, onButtonClick, id, styles, classes, children }) => {
  return (
    <button
      style={styles}
      key={id}
      onClick={onButtonClick && onButtonClick.bind(null, id)}
      className={classes && classes.join(' ')}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  onButtonClick: propTypes.func.isRequired,
  id: propTypes.string,
  styles: propTypes.object,
  classes: propTypes.array
}

export default Button;