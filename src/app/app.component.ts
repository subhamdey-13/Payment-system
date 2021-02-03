import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from "@angular/router";
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CardManager';
  navList = [
    { href: 'dashboard', displayName: 'Dashboard', isActive: false },
    { href: 'payment-form', displayName: 'Payment-Form', isActive: false },
  ];

  constructor(private router: Router) { }
  ngOnInit() {
    const navUrl = window.location.pathname.split('/')[1];
    const selectedUrl: any = _.find(this.navList, (obj: any, index) => {
      return obj.href===navUrl;
    });
    this.redirectToUrl(selectedUrl ? selectedUrl : this.navList[0]);
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.afterNavigation();
      }
    });

  }

  afterNavigation(): any {
    const navUrl = window.location.pathname.split('/')[1];
    _.forEach(this.navList, (obj: any, index) => {
      obj.isActive = (obj.href === navUrl) ? true : false;
    });
  }

  redirectToUrl(navLink) {
    if (!navLink.isActive) {
      this.navList = _.forEach(this.navList, (obj: any, index) => {
        obj.isActive = (obj.href === navLink.href) ? true : false;
        navLink.isActive = (obj.href === navLink.href) ? true : navLink.isActive;
      });

      this.router.navigate([navLink.href]);
    }
  }
}
