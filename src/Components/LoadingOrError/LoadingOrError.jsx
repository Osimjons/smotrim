import React from 'react';

import styles from './LoadingOrError.module.css';

export const LoadingOrError = ({ loading, error }) => {
  if (loading) {
    return <h1 className={styles.loading}>Загрузка ...</h1>;
  }
  if (error) return <div>{error.message}</div>;
};
