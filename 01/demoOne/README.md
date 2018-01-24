# DemoOne

```
ng new demoOne -sg -routing
```

```
npm i --save @angular/cdk @angular/material @angular/animations hammerjs
```
Import them in styles.css
```
@import "~@angular/material/prebuilt-themes/indigo-pink.css";
```
app.modules
```
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ]
})
```

To Add check box first [checkbox import modules](https://material.angular.io/components/checkbox/api)
```
import {MatCheckboxModule} from '@angular/material/checkbox';