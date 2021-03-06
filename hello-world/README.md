### Section 1 Overview and Project Setup

- To setup:

  - Create your application and navigate to it

  ```zsh
  npx create-react-app my-app-name --template typescript

  cd my-app-name
  ```

  - Install packages using `npm i`
  - Run the project using `npm start`

### Section 2 Adding ionic to react project

- In your terminal, install ionic
  - ```ts
    npm install @ionic/react
    ```
- Add ionic css files to index.tsx
  - ```ts
    import '@ionic/react/css/core.css';
    ```
- To check if working, add an IonButton in App.tsx

  - ```ts
    import { IonButton } from '@ionic/react';

    function Example() {
      return <IonButton>Click Me</IonButton>;
    }
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

### Section 5 Ionicons

- Ionic provides a set of icons called
  [Ionicons](https://ionicons.com/)
- Install ionicons
  ```zsh
  npm install ionicons
  ```
- Usage

  ```ts
  import { IonButton, IonIcon } from '@ionic/react';
  import { play as playIcon } from 'ionicons/icons';

  function Example() {
    return (
      <IonButton onClick={handleClick}>
        <IonIcon icon={playIcon} slot='start' />
        Click Me
      </IonButton>
    );
  }
  ```

- Other Props
  - ** Slot _(start, end, icon-only)_ ** - location of the icon where it will be displayed
