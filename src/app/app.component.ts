import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';

  constructor(public location: Location) { }

  isMap(path) {
    let title = this.location.prepareExternalUrl(this.location.path());
    title = title.slice(1);
    if (path === title) {
      return false;
    } else {
      return true;
    }
  }

  refresh(): void {
    window.location.reload();
  }
}
