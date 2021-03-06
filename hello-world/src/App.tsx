import React, { useState } from 'react';
import {
  IonApp,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToast,
  IonToolbar,
} from '@ionic/react';

// icons
import { play as playIcon } from 'ionicons/icons';

function App() {
  const [showToast, setShowToast] = useState<boolean>(false);

  const handleClick = (): void => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 1500);
  };

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonButton onClick={handleClick}>
          <IonIcon icon={playIcon} slot='start' />
          Click Me
        </IonButton>
        <IonToast isOpen={showToast} message='Hello world!'></IonToast>
      </IonContent>
    </IonApp>
  );
}

export default App;
