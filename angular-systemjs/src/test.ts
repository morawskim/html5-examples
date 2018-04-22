import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { NgModule, Component } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

@Component({
    selector: 'app-root',
    template: '<h1>Hello world angular</h1>'
})
class AppRootComponent {
}

@NgModule({
    imports: [BrowserModule],
    declarations: [AppRootComponent],
    bootstrap: [AppRootComponent]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
