import React from 'react';
import PropTypes from 'prop-types';

export default function Joker({ joke, btnText }) {
  return (
    <>
      <h1>{joke.setup}</h1>
      <h1>{btnText !== 'Get Punchline' ? joke.punchline : ''}</h1>
    </>
  );
}

Joker.propTypes = {
  joke: PropTypes.shape({
    setup: PropTypes.string,
    punchline: PropTypes.string,
  }).isRequired,
  btnText: PropTypes.string.isRequired,
};
