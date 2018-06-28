import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { HiglightUsingRender2Directive } from './higlight-using-render2/higlight-using-render2.directive';
import { HighlightUsingHostlistnerDirective } from './using-hostlistener-directive/highlight-using-hostlistner.directive';
import { HighlightUsingHostbindingDirective } from './using-hostbinding-directive/highlight-using-hostbinding.directive';
import { DirectivePropertyBindingDirective } from './directive-property-binding/directive-property-binding.directive';
import { DirectiveAsPropertyDirective } from './directive-as-property/directive-as-property.directive';
import { UnlessStructuralDirective } from './unless-structural-directive/unless-structural.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    HiglightUsingRender2Directive,
    HighlightUsingHostlistnerDirective,
    HighlightUsingHostbindingDirective,
    DirectivePropertyBindingDirective,
    DirectiveAsPropertyDirective,
    UnlessStructuralDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
