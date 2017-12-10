import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowsNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowsNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

}
