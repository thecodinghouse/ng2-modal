import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Modal} from './components/ng2-modal/modal';
import {Demo} from './demo/app/demo/demo-modal';

@Component({
  selector: 'main-app',
  providers: [],
  pipes: [],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'main-app.html',
  styleUrls: ['main-app.css'],
})
@RouteConfig([
  { path: '/demo-modal',       component: Demo,        name: 'DemoModal', useAsDefault: true  },
])
export class MainApp {
  constructor() {}
}
