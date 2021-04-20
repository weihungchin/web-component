import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CustomListComponent } from './custom-list.component';

@NgModule({
  imports: [CommonModule, BrowserModule],
  exports: [CustomListComponent],
  declarations: [CustomListComponent],
  providers: [],
})
export class CustomListModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const el = createCustomElement(CustomListComponent, {
      injector: this.injector,
    });

    customElements.define('custom-list', el);
  }
}
