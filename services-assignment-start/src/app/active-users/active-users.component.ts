import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UserService } from '../user-service';
import { CounterService } from '../counter-service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  users: string[];
  count: number = 0;
  
  constructor(private userService: UserService, private counterService: CounterService){  }

  ngOnInit(){
    this.users = this.userService.activeUsers;
    this.count = this.counterService.activeToInactiveCount;
  }

  onSetToInactive(id: number) {
    this.userService.onSetToInactive(id);
    this.counterService.setActiveToInactiveCount();
    this.count = this.counterService.activeToInactiveCount;
  }
}
