import { LoggingService } from "./logging.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AccountService{
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ]; 

    constructor(private logService: LoggingService){}
    
    onAccountAdded( name: string, status: string ) {
        this.accounts.push({name: name, status: status});
        this.logService.logStatusChange(status);
    }

    onStatusChanged(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
        this.logService.logStatusChange(newStatus);
    }
}