### Section 1 Overview and Project Setup

- To setup:

  - Create your application and navigate to it

  ```
  npx create-react-app my-app-name --template typescript

  cd my-app-name
  ```

  - Install packages

  `npm i`

- To run the project:
  - `npm start`

### Section 2 Adding ionic to react project

- In your terminal, install ionic
  - `npm install @ionic/react`
- Add ionic css files to index.js
  - `import '@ionic/react/css/core.css';`
- To check if working, add an IonButton in App.tsx

  - ```ts
    import { IonButton } from '@ionic/react';
    <IonButton>Click Me</IonButton>;
    ```

### Section 3 Toast Messages

```ts
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
      <IonButton onClick={handleClick}>Click Me</IonButton>
      <IonToast isOpen={showToast} message='Hello world!'></IonToast>
    </div>
  );
}
```

### Section 4 Adaptive Styling

- Ionic tracks which user agent (navigator.userAgent)
- Class changes depending on user agent (md/ios)
- Uses Material Design by default
- To set up style programatically by default:
  - navigate to index.js
  - import { setupConfig } from '@ionic/react'
  - ```javascript
    setupConfig({
      mode: 'ios', // ios or md
    });
    ```
