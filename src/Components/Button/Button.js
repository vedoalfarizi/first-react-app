import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

export default function Button(props){
  const { onClick, to, name } = props;
  if(onClick){
    return <div>
      <button onClick={onClick}>{name}</button>
    </div>
  }
  return(
    <div className={styles.root}>
      <Link to={to}>{name}</Link>
    </div>
  );
}

Button.defaultProps = {
  name: 'Dashboard Default',
  to: '/dashboard',
}