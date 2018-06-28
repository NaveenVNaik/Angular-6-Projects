import { Directive, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirectiveAsProperty]'
})
export class DirectiveAsPropertyDirective {
  @Input() highlightColor: string = 'purple';
  @Input('appDirectiveAsProperty') defaultColor: string = 'transparent';

  constructor() { }

  ngOnInit() {
    this.bckColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') bckColor: string;

  @HostListener('mouseenter') mousehover(eventData: Event) {
    this.bckColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleft(eventData: Event) {
    this.bckColor = this.defaultColor;
  }

}
