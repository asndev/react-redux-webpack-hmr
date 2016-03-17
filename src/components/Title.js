import React, { PropTypes } from 'react';
import styles from './Title.scss';

const Title = (props) => {
  return <h2 className={styles.awesome}>{props.value}</h2>;
};

Title.propTypes = {
  value: PropTypes.string.isRequired
};

export default Title;
