import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NgMultiSelectDropDownInfiniteScrollModule } from '../ng-multiselect-dropdown-infinite-scroll/src';
 

import { SelectSectionComponent } from './components/select-section';
import { SampleSectionComponent } from './components/sample-section.component';
import { SingleDemoComponent } from './components/select/single-demo';
import { MultipleDemoComponent } from './components/select/multiple-demo';
import { ShCodeViewer } from '../code-viewer/code-viewer.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [SelectSectionComponent, SampleSectionComponent, SingleDemoComponent, MultipleDemoComponent, AppComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    NgMultiSelectDropDownInfiniteScrollModule.forRoot(),
    ShCodeViewer
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
