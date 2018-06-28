import { Component, OnInit, Input, ViewEncapsulation, OnChanges, 
        SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ContentChild, ElementRef } 
from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  //added label color in css file, this will change the lable color present ion the 
  //cockpit html file. for this we need to use below syntax. this is called overriding the
  //view encapsulation
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements 
      OnInit,OnChanges,DoCheck, AfterContentInit, AfterContentChecked,AfterViewInit,
      AfterViewChecked,OnDestroy {
  @Input() element: {type:string, name:string, content: string};
  //we can use alias for the input decorator. in this case we have to use the alias name in html
  //file (app.component.html) as well
  //@Input('ele') element: { type: string, name: string, content: string };

  @Input() name: String;
  @ContentChild('paraRef') paragraph: ElementRef;

  constructor() { 
    console.log("constructer");
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChanges");
    console.log(changes);
  }

  ngOnInit() {
    console.log("ngOnInit"); 
    console.log('Accessing paraRef element using ContentChild in ngInit' + this.paragraph.nativeElement.textContent);   
  }

  ngDoCheck() {
    console.log("inside ngDoCheck");
  }

  ngAfterContentInit(){
    console.log("inside ngAfterContentInit");
    console.log('Accessing paraRef element using ContentChild' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(){
    console.log("inside ngAfterContentChecked");    
  }

  ngAfterViewInit() {
    console.log("inside ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("inside ngAfterViewChecked");
  }

  ngOnDestroy(){
    console.log("inside ngDestroy");
  }
  
}
