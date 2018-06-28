import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';
import { CrossCommunicationService } from '../crosscommunication-service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]-- this has been added in app.module
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private accService: AccountService,
              private crossCommService: CrossCommunicationService
              )
    {  
      this.crossCommService.informNewAccCreated.subscribe(
            (status) => alert(status)
        );
    }

  onSetTo(status: string) {
    this.accService.onStatusChanged(this.id,status);
    // this.logService.logStatusChange(status);
     
  }
}
