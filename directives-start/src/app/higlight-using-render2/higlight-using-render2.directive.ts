import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHiglightUsingRender2]'
})
export class HiglightUsingRender2Directive implements OnInit{

  constructor(private eleRef: ElementRef, private render: Renderer2) { }

  ngOnInit(){
    this.render.setStyle(this.eleRef.nativeElement,'background-color','pink');
  }
}
