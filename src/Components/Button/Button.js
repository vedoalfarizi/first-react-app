import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

export default function Button(props){
  const { to, name } = props;
  return(
    <div className={styles.root}>
      <Link to={to}>{name}</Link>
    </div>
  );
}