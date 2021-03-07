### Section 1 Overview and Project Setup

- To setup:

  - Create your application and navigate to `my-app-name` directory

  ```zsh
  npx create-react-app my-app-name --template typescript

  cd my-app-name
  ```

  - Install packages using `npm i`
  - Run the project using `npm start`

- Adding ionic to react project

  - In your terminal, install ionic
    - ```zsh
      npm install @ionic/react
      ```
  - Add ionic css files to index.tsx
    - ```ts
      import '@ionic/react/css/core.css';
      ```
  - Initial template

    - ```ts
      import React from 'react';
      import {
        IonApp,
        IonContent,
        IonHeader,
        IonTitle,
        IonToolbar,
      } from '@ionic/react';

      function App() {
        return (
          <IonApp>
            <IonHeader>
              <IonToolbar>
                <IonTitle>My App</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding'>
              Add some content here...
            </IonContent>
          </IonApp>
        );
      }
      export default App;
      ```
