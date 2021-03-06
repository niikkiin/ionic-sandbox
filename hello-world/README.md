### Section 1 Overview and Project Setup

- To setup:

  - Create your application and navigate to `my-app-name` directory

  ```zsh
  npx create-react-app my-app-name --template typescript

  cd my-app-name
  ```

  - Install packages using `npm i`
  - Run the project using `npm start`

### Section 2 Adding ionic to react project

- In your terminal, install ionic
  - ```zsh
    npm install @ionic/react
    ```
- Add ionic css files to index.tsx
  - ```ts
    import '@ionic/react/css/core.css';
    ```
- To check if working, add an IonButton in `App.tsx`

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

### Section 6 Theming Customization

- Ionic has a [color generator](https://ionicframework.com/docs/theming/color-generator)
- To start customizing:
  - Create a new folder called `theme` inside `src` folder
  - Create a file inside `theme` folder called `variables.css`
  - Copy all newly generated variables from the color generator inside the `variables.css` file
  - Import the file to `index.tsx`
    ```ts
    import 'theme/variables.css';
    ```
    Note 1: Variable css file must be below the `core.css` to override the styles <br/>
    Note 2: I use absolute imports meaning `theme/variables.css` is also equivalent to `./theme/variables.css`

### Section 7 Full-Page Ionic Apps

- It is ideal to make all your components an Ion component
- There are other css files that can be imported to make your app look more like a native application

  ```js
  /* Core CSS required for Ionic components to work properly */
  import '@ionic/react/css/core.css';

  /* Basic CSS for apps built with Ionic */
  import '@ionic/react/css/normalize.css';
  import '@ionic/react/css/structure.css';
  import '@ionic/react/css/typography.css';

  /* Optional CSS utils that can be commented out */
  import '@ionic/react/css/padding.css';
  import '@ionic/react/css/float-elements.css';
  import '@ionic/react/css/text-alignment.css';
  import '@ionic/react/css/text-transformation.css';
  import '@ionic/react/css/flex-utils.css';
  import '@ionic/react/css/display.css';
  ```
