import React, { useState } from 'react';
import './App.css';
import { IonButton, IonToast } from '@ionic/react';

function App() {
  const [showToast, setShowToast] = useState<boolean>(false);

  const handleClick = (): void => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 1500);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <IonButton onClick={handleClick}>Click Me</IonButton>
        <IonToast isOpen={showToast} message='Hello world!'></IonToast>
      </header>
    </div>
  );
}

export default App;
