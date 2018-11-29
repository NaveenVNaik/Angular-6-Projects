import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '../../../../node_modules/@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;

  constructor(private serversService: ServersService,private router:ActivatedRoute ) { }

  ngOnInit() {
    //console.log("inside edit");
    this.server = this.serversService.getServer(parseInt(this.router.snapshot.params['id']));
    //OR
    this.router.params.subscribe(
      (para: Params) => {
        this.server = this.serversService.getServer(parseInt(para['id']));
        this.serverName = this.server.name;
        this.serverStatus = this.server.status;
      }
    );
    
    // console.log(this.router.snapshot.queryParams);
    // console.log(this.router.snapshot.fragment);
   this.router.queryParams.subscribe(
     (qparams:Params)  => {
        //console.log(qparams);
        this.allowEdit = qparams['allowEdit'] ==='1' ? true : false;
        //console.log(this.allowEdit);
     })
   
    // this.router.fragment.subscribe(); 
    
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
