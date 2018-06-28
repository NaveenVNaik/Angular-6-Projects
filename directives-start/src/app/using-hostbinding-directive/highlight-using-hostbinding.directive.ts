import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightUsingHostbinding]'
})
export class HighlightUsingHostbindingDirective {

  constructor() { }

  @HostBinding('style.backgroundColor') bckColor: string = 'transparent';

  @HostListener('mouseenter') mousehover(eventData: Event) {
    this.bckColor = 'gray';
  }

  @HostListener('mouseleave') mouseleaft(eventData: Event) {
    this.bckColor = 'transparent';
  }
}
