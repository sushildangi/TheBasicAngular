import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowsNewServer = false;
  serverCreationStatus = 'No Server Created';
  serverName = 'Test Server';

  constructor() {
    setTimeout(() => {
      this.allowsNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!, Name is ' + this.serverName;
  }

  onUpdateServerStatus(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
