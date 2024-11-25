import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MultiSelectInfiniteScrollComponent } from './multiselect-infinte-scroll.component';
import { ClickOutsideDirective } from './click-outside.directive';
import { ListFilterPipe } from './list-filter.pipe';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [MultiSelectInfiniteScrollComponent, ClickOutsideDirective, ListFilterPipe],
  providers: [ListFilterPipe],
  exports: [MultiSelectInfiniteScrollComponent]
})

export class NgMultiSelectDropDownInfiniteScrollModule {
    static forRoot(): ModuleWithProviders<NgMultiSelectDropDownInfiniteScrollModule> {
      return {
        ngModule: NgMultiSelectDropDownInfiniteScrollModule
      };
    }
}
