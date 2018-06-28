import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDirectivePropertyBinding]'
})
export class DirectivePropertyBindingDirective implements OnInit{
  @Input() highlightColor: string = 'red';
  @Input() defaultColor: string = 'transparent';

  constructor() { }

  ngOnInit(){
    this.bckColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') bckColor: string ;

  @HostListener('mouseenter') mousehover(eventData: Event) {
    this.bckColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleft(eventData: Event) {
    this.bckColor = this.defaultColor;
  }

}
