import React, { useEffect, useState, useContext } from 'react';
import { AppsContext } from '../App'; 
import Button from '../Components/Button/Button'

export default function Home(){
  const { apps } = useContext(AppsContext);
  
  const [name, setName] = useState('vedo'); 
  const [userName, setUsername] = useState('vedo');
  const [color, setColor] = useState('f2f2f2')
  const handleClick = () => {
    setUsername(name);
  };
  useEffect(() => {
    const randomBg = Math.floor(Math.random()*16777215).toString(16);
    setColor(randomBg);
  }, [userName]);

  return(
    <div style={{'background': `#${color}`}}>
      <h4>{apps.title}</h4>
      <span>Hello, {userName}!</span>
      <input type='text' onChange= {(e) => setName(e.target.value)} />
      <Button name='Ubah nama' onClick={handleClick} /> 
    </div>
  );
}