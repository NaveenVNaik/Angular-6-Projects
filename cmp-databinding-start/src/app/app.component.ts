import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server',name:'Test Server',content:'Working!!'}];

  onServerCreated(serverData: { serverName:string, serverContent:string}){
    this.serverElements.push({
      type:'server',
      name:serverData.serverName,
      content:serverData.serverContent
    });
  }

  onblueprintCreated(serverData: { serName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serName,
      content: serverData.serverContent
    });
  }

  onChangeFirst = () => {
    console.log("inside onChangeFirst");
    this.serverElements[0].name = "changed!!!";
  }

  onDestroy(){
    this.serverElements.splice(0,1);
  }

}
