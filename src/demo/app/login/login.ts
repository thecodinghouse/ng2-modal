import {Component, ViewChild} from 'angular2/core';
import { Http, Headers } from 'angular2/http';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import {Modal} from '../../../components/ng2-modal/modal';

@Component({
  selector: 'login',
  templateUrl: 'demo/app/login/login.html',
  styleUrls: ['demo/app/login/login.css'],
  directives: [ROUTER_DIRECTIVES, Modal]
})

export class Login{
  modal: Modal
  constructor(public _modal: Modal) {
    this.modal = _modal
  }
close(){
  this.modal.close();
}
login(username, password){
  let data = {username: username, pasword: password}
  this.modal.close(data);
}
}
