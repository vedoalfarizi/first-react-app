import React from 'react';
import Button from '../Components/Button/Button';

export default function Home(){
  return(
    <div>
      Halaman Home
      <Button to='/dashboard' name='Dashboard'/>
      <Button to='/about' name='About'/>
    </div>
  );
}