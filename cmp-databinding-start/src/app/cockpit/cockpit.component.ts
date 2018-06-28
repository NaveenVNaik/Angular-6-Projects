import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{ serName: string, serverContent: string }>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serContentInput: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameInput) {
    console.log(serverNameInput);
    console.log(this.serContentInput);
    this.serverCreated.emit({
        serverName:serverNameInput.value,
        serverContent: this.serContentInput.nativeElement.value
      })
  }

  onAddBlueprint(serverNameInput) {
    this.blueprintCreated.emit({
      serName: serverNameInput.value,
      serverContent: this.serContentInput.nativeElement.value
    })
  }

}
