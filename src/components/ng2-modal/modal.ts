import {Component, ViewEncapsulation, ComponentRef, DynamicComponentLoader,ElementRef, Input, EventEmitter, Output} from 'angular2/core';
import {Open} from './open.component';

@Component({
  selector: 'modal',
  template: `
  <div class="modal fade" [open]="!isOpen" id="myModal" [attr.data-keyboard]="true" [attr.data-backdrop]="false" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header" [hidden]=!modalHeader>
          <button type="button" class="close" data-dismiss="modal" (click)='close()' aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title text-center" id="myModalLabel">{{modalTitle}}</h4>
        </div>
        <div class="modal-body">
        <div [hidden]=!modalMessage>
        {{message}}
        </div>
          <div #child>
          </div>
        </div>
        <div class="modal-footer" [hidden]=!modalFooter>
        <span [hidden]=!okButton >
          <button [hidden]=!okButton class="btn btn-primary" (click)="submit()">{{okButtonText}}</button>
          </span>
          <span [hidden]=!cancelButton >
          <button [hidden]=!cancelButton class="btn btn-primary" (click)="close()">{{cancelButtonText}}</button>
          </span>
        </div>
      </div>
    </div>
  </div>
`,
  providers: [],
  directives: [Open],
  encapsulation: ViewEncapsulation.None,
  pipes: []
})
/**
  * API to an open modal window.
  */
export class Modal{
  /**
     * Caption for the title.
     */
  public modalTitle:string;
  /**
    * component which is to be loaded dynamically.
    */
  public component:any;
  /**
     * Describes if the modal contains Ok Button.
     * The default Ok button will close the modal and emit the callback.
     * Defaults to true.
     */
  public okButton:boolean = true;
  /**
     * Caption for the OK button.
     * Default: Ok
     */
  public okButtonText:string= 'Ok';
  /**
     * Describes if the modal contains cancel Button.
     * The default Cancelbutton will close the modal.
     * Defaults to true.
     */
  public cancelButton:boolean = true;
  /**
     * Caption for the Cancel button.
     * Default: Cancel
     */
  public cancelButtonText:string = 'Cancel';
  /**
     * if the modalMessage is true it will show the message inside modal body.
     */
  public modalMessage:boolean = true;
  /**
     * Some message/content can be set in message which will be shown in modal body.
     */
  public message:string;
  /**
    * if the value is true modal footer will be visible or else it will be hidden.
    */
  public modalFooter:boolean= true;
  /**
    * shows modal header if the value is true.
    */
  public modalHeader:boolean = true;
  /**
    * if the value is true modal will be visible or else it will be hidden.
    */
  public isOpen:boolean=false;
  /**
    * Emitted when a ok button was clicked
    * or when close method is called.
    */
  @Output() public modalOutput:EventEmitter<any> = new EventEmitter();
  constructor(public dcl:DynamicComponentLoader, public _elementRef: ElementRef){
  }
  /**
       * Opens a modal window creating backdrop.
       * @param component The angular Component that is to be loaded dynamically(optional).
       */
  open(component?){
    this.isOpen= true;
    if(component){
    this.component = this.dcl.loadIntoLocation(component, this._elementRef, "child");
    }
  }
  /**
     *  close method dispose the component, closes the modal and optionally emits modalOutput value.
     */
  close(data?:any){
    this.dispose();
    if(data){
      this.modalOutput.emit(data);
    }
  }
  /**
     *  ok method dispose the component, closes the modal and emits true.
     */
  submit(){
    this.dispose();
    this.modalOutput.emit(true);
  }
  /**
     *  dispose method dispose the loaded component.
     */
  dispose(){
    this.isOpen = false;
    if(this.component != undefined){
           this.component.then((componentRef:ComponentRef) => {
           componentRef.dispose();
           return componentRef;
         });
        }
  }

}
