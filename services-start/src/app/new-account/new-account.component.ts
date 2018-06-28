import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';
import { CrossCommunicationService } from '../crosscommunication-service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService] -- this has been added in app.module
})
export class NewAccountComponent {

  constructor(private logSevice: LoggingService, 
              private accService: AccountService,
              private crossCommService: CrossCommunicationService 
            ){  }
  
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accService.onAccountAdded(accountName,accountStatus);
    // the below logging service has been called in account service - injecting service 
    //inside service.
    // this.logSevice.logStatusChange(accountStatus);


    //emit an event and this will be captured in account component - cross component communication
    this.crossCommService.informNewAccCreated.emit(accountName);
  }
}
