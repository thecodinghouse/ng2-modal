import {Component,ViewEncapsulation,ViewChild} from 'angular2/core';
import {NgIf} from 'angular2/common';
import {Modal} from '../../../components/ng2-modal/modal';
import {Alert} from '../../../components/ng2-modal/alert';
import {Login} from '../login/login';

@Component({
  selector: 'demo',
  template: `
      <div>
        <button (click)="alertOpen()" class="btn btn-primary">Alert</button>
        <button (click)="confirmOpen()" class="btn btn-primary">Confirm</button>
        <alert (alertOutput)="confirmClose($event)">
        </alert>
        <button (click)="modalOpen()" class="btn btn-primary">Modal Demo</button>
        <modal (modalOutput)="getData($event)">
        </modal>
      </div>
      <div *ngIf="data != undefined">
        <div class="text-right">
          Username :
          {{data.username}}
        </div>
      </div>
`,
  providers: [],
  directives: [Modal,NgIf, Alert],
  encapsulation: ViewEncapsulation.None,
  pipes: []
})
export class Demo{
  public isOpen:boolean = false;
  public data;
  @ViewChild(Modal) modal;
  @ViewChild(Alert) alert;
  constructor(){}

  modalOpen(){
    this.modal.modalTitle = "LOGIN";
    this.modal.modalFooter = false;
    this.modal.modalMessage = true;
    this.modal.message = "Here Login component will load.";
    this.modal.open(Login);
  }
  alertOpen(){
    this.alert.alertFooter = true;
    this.alert.cancelButton = true;
    this.alert.okButton = false;
    this.alert.alertHeader = true;
    this.alert.alertTitle = "A simple Alert modal window";
    this.alert.message = "Alert is a classic (title/body/footer) 1 button modal window";
    this.alert.cancelButtonText = "Ok, Got it.";
    this.alert.open();
  }
  confirmOpen(){
    this.alert.cancelButton = true;
    this.alert.okButton = true;
    this.alert.alertTitle = "A simple Confirm modal window";
    this.alert.message = "Confirm is a classic (title/body/footer) 2 button modal window";
    this.alert.okButtonText = "Ok, Got it.";
    this.alert.cancelButtonText = "Close";
    this.alert.open();
  }
  getData(data){
    this.data = data;
  }
  confirmClose(data){

  }
}
