# NgxHonk


I blame [Jason Lengstorf](https://twitter.com/jlengstorf)

```bash
npm install ngx-honk
```


```diff
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
+ import { NgxHonkModule } from 'ngx-honk';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
+    NgxHonkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## To enable

```html
<!-- my-component.html -->

<a href="https://ionicframework.com" target="_blank" data-honk="true">Go to website</a>

```

## To remove

Just remove `data-honk="true"` from your tags.

