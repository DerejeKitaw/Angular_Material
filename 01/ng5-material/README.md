# Ng5Material

1. Generate ng5-material project
```
ng new ng5-material -sg -routing
```

2. install material
```
npm install @angular/material @angular/cdk --save
```

3. Install angular animation. Because somae angular material depend on it.
```
npm install @angular/animations
```
4. import BrowserAnimationModule
```
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
```

5. Create material module
```
ng g module material
```

6. Import material theme 
```
@import "~@angular/material/prebuilt-themes/indigo-pink.css";
```

7. Install hammerjs - some of the feature in the theme require hamerjs
```
npm install hammerjs --save
```

8. import hammerjs in the main.ts - 
```
import 'hammerjs';
```

9. Import icons from google api
```
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

10. Add Button

    import [MatButtonModule](https://material.angular.io/components/button/api)
    ```
    import {MatButtonModule} from '@angular/material';
    ```
    HTML
    ```
    <button mat-button>My button</button>
    ```

11. Add toolbar

    import [MatToolbarModule](https://material.angular.io/components/toolbar/api)
    ```
    import {MatToolbarModule} from '@angular/material/toolbar';
    ```
    HTML
    ```
        <mat-toolbar color="primary">
        <mat-toolbar-row>
            <span>MyMaterial</span>

            <span class="example-spacer"></span>
            
            <button mat-button>About</button>
            <button mat-button>Services</button>
            <button mat-button>Contact</button>
        </mat-toolbar-row>
        </mat-toolbar>
    ```

12. Add input field
Import [MatInputModule](https://material.angular.io/components/input/api)
```
import {MatInputModule} from '@angular/material/input';
```

12 Add progress spinner and card modules

```
MatProgressSpinnerModule , MatCardModule
```

13. Import form module for the form works
```

```

15. Deploy
```
ng build --prod --base-href "https://derejekitaw.github.io/Angular_Material/"
ngh [OPTIONS]
```