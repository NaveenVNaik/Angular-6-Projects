import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnlessStructural]'
})
export class UnlessStructuralDirective {
  @Input() set appUnlessStructural(cond: boolean) {
    if (!cond) {
      this.vcRef.createEmbeddedView(this.temRef);
    } else {
      this.vcRef.clear();
    }
  }
  constructor(private temRef: TemplateRef<any>, private vcRef: ViewContainerRef ) { }

}
