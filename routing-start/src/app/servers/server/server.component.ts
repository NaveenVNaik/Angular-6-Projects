import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '../../../../node_modules/@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private router:ActivatedRoute,
              private route:Router) { }

  ngOnInit() {
    // const serverid = parseInt(this.router.snapshot.params['id']);
    // this.server = this.serversService.getServer(serverid);
    this.router.params.subscribe(
      (parameters: Params) => {
        this.server = this.serversService.getServer(parseInt(parameters['id']));
        // console.log("inside server", this.server.id);
      }
    );
  }

  onEdit() {
   //console.log("Test",this.route);
    this.route.navigate(['edit'],{relativeTo:this.router, queryParamsHandling:'preserve'});
  }

}
