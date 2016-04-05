## ng2-modal

An angular2 customizable modal using bootstrap.


### Dependencies

ng2-modal depends on bootstrap, you'll need to include below link before using ng2-modal:

```html
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
```


### How to use-
- Clone or download the repository.
- Add the directory components/modal into your angular2 app.
- Use it as `<modal></modal>` or `<alert></alert>` in the view of the desired component.

 
### Methods

 * ##### Modal Methods
      - `open(component?)`
    
        Opens a modal and here the component is optional. If the component is given it is loaded dynamically in 
        modals body.

      - `close(data?)`
  
        Close method first dispose the component if it exist and then close the modal.This method emits
        modalOutput value i.e. data,if it is given. It is called when cancel button is clicked.

      - `submit()`
 
        submit method dispose the component and then close the modal. This method emits modalOutput value 
        true to provide a callback. It is called when ok button is clicked.
 
 * ##### Alert Methods
      - `open()`
 
        Open method opens a alert modal.
   
      - `cancel()`
  
        Cancel method close the alert modal. It is called when cancel button is clicked. This method emits 
        alertOutput value true to provide a callback.
    
      - `ok()`
  
        ok method close the aler modal
 
### Outputs

 * ##### Modal Output
      - `modalOutput: EventEmitter`
  
        Emits when ModalComponent.close() or ModalComponent.submit() is called.
   
 * ##### Alert Output
      - `alertOutput: EventEmitter`
     
        Emits when AlertComponent.ok() is called.

### Header Properties

 * #####Modal Properties

      - `modalHeader`: boolean, default:true

        Show or hide the header. Specify true to show.

      - `modalTitle`: string, default: undefined

        If modalHeader is true you can specify title in modalTitle.

 * #####Alert Properties

      - `alertHeader`: boolean, default:true

        Show or hide the header. Specify true to show.

      - `alertTitle`: string, default: undefined

        If alertHeader is true you can specify title in alertTitle.
   
   
### Body Properties

 * #####Modal Properties

      - `modalMessage`: boolean, default: true

        Show or hide the message specified in modal body. Specify true to show.

      - `message`: string, default: undefined

        If modalMessage is true you can specify message/content that is to be shown in modal body.

 * #####Alert Properties

      - `alertMessage`: boolean, default: true

        Show or hide the message specified in alert body. Specify true to show.

      - `message`: string, default: undefined

        If alertMessage is true you can specify content/message that is to be shown in alert body.
   
### Footer Properties

 * #####Modal Properties

      - `modalFooter`: boolean, default:true

        Show or hide the footer. Specify true to show.

      - `okButton`: boolean, default: true

        Show or hide the ok button.

      - `okButtonText`: string, default: Ok

        If okButton is true you can specify text of the button in okButtonText.

      - `cancelButton`: boolean, default: true

        Show or hide the cancel button.

      - `cancelButtonText`: string, default: Cancel

        If cancelButton is true you can specify text of the button in cancelButtonText.
   
 * #####Alert Properties

      - `alertFooter`: boolean, default:true

        Show or hide the footer. Specify true to show.

      - `okButton, okButtonText, cancelButton, cancelButtonText` is same as modal footer properties.

### Examples

 * #####Alert Modal
 
      `alert.open()`: Opens a alert modal with header, body and footer. The title and message to be shown are set in alertTitle and message property respectively. Alert footer contains cancelButton with text 'Ok, Got it.' which closes alert modal and another(okButton) is hidden as it is set to false.

      ```html
         <button (click)="alertOpen()" class="btn btn-primary">Alert</button>
         <alert></alert>
      ```
      ```typescript        
         @ViewChild(Alert) alert;  
         alertOpen(){
            this.alert.alertHeader = true;
            this.alert.alertTitle = "A simple Alert modal window";
            this.alert.message = "It is a classic Alert modal with title, body, footer.";
            this.alert.alertFooter = true;
            this.alert.okButton = false;
            this.alert.cancelButton = true;
            this.alert.cancelButtonText = "Ok, Got it.";
            this.alert.open();
         }
      ```         
 
 * #####Confirm Modal
 
      `alert.open()`:  opens a confirm modal.It shows the title and message that is set in alertTitle and message  property respectively. Confirm footer contains two buttons, one is okButton which will emit modalOutput and is handled in `confirmClose()` method, the other is cancelButton which will close the confirm modal.
 

      ```html
         <button (click)="confirmOpen()" class="btn btn-primary">Confirm</button>
         <alert (alertOutput)="confirmClose($event)"></alert>
      ```
      ```typescript            
         confirmOpen(){
            this.alert.cancelButton = true;
            this.alert.okButton = true;
            this.alert.alertTitle = "A simple Confirm modal window";
            this.alert.message = "Confirm is a classic (title/body/footer) 2 button modal window";
            this.alert.okButtonText = "Ok, Got it.";
            this.alert.cancelButtonText = "Close";
            this.alert.open();
         }
      ```         
  
 * #####Dynamic Modal
 
       `modal.open(Login)`: opens a modal with header and body. The modal's footer is hidden as it's value is false.The title and message to be shown are set in modalTitle and message property respectively. Open method optionally takes a component that is loaded dynamically in modal's body. To pass a component in open method you need to import that(here Login component is loaded).If you want to emit some value you can call `close(data)` method and pass the value(optional).

      ```html 
        <button (click)="modalOpen()" class="btn btn-primary">Modal Demo</button>
        <modal (modalOutput)="getData($event)"></modal>
      ```
      ```typescript
         modalOpen(){
            this.modal.modalTitle = "LOGIN";
            this.modal.modalFooter = false;
            this.modal.modalMessage = true;
            this.modal.message = "Here Login component will load.";
            this.modal.open(Login);
         }
      ```
