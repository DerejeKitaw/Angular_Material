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