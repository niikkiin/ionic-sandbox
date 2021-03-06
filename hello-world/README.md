<!-- SECTION 4 adaptive styling -->

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
