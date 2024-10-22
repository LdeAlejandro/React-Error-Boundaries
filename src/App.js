import React, { useEffect, useState } from 'react';
import './App.css';
import { ThemeContext, themes } from './Theme';
import Card from './Card';

function App() {

  const [token, setToken] = useState();

  useEffect(() => {
      setTimeout(() => {
          setToken('asdasdasd') 
          //console.log('set token: ', token)
      }, 4000)
      
  }, [setToken])

  return (
    <ThemeContext.Provider value={{...themes.primary, token}}>
      <Card />
      <tr></tr>
          App
    </ThemeContext.Provider>
  );
}

export default App;
