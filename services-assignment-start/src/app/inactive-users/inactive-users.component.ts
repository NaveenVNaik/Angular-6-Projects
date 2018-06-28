import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UserService } from '../user-service';
import { CounterService } from '../counter-service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  count: number = 0;
  users: string[];

  constructor(private userService: UserService, private counterService: CounterService){}

  ngOnInit(){
    this.users = this.userService.inactiveUsers;
    this.count = this.counterService.inactiveToActiveCount;
  }

  onSetToActive(id: number) {
    this.userService.onSetToActive(id);
    this.counterService.setinactiveToActiveCount();
    this.count = this.counterService.inactiveToActiveCount;
  }
}
