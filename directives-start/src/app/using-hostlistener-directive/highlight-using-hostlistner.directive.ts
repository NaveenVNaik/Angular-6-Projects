import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightUsingHostlistner]'
})
export class HighlightUsingHostlistnerDirective{

  constructor(private ele:ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') mousehover(eventData: Event){
    this.renderer.setStyle(this.ele.nativeElement,'background-color','lightblue');
  }

  @HostListener('mouseleave') mouseleaft(eventData: Event) {
    this.renderer.setStyle(this.ele.nativeElement, 'background-color', 'transparent');
  }
}
