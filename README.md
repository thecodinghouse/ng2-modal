## ng2-modal

An angular2 customizable modal using bootstrap.


### Dependencies

ng2-modal depends on bootstrap, you'll need to include below link before using ng2-modal:

```<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">```


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

      - `content`: boolean, default: true

        Show or hide the content specified in modal body. Specify true to show.

      - `contentString`: string, default: undefined

        If content is true you can specify content/message that is to be shown in modal body.

 * #####Alert Properties

      - `content`: boolean, default: true

        Show or hide the content specified in alert body. Specify true to show.

      - `contentString`: string, default: undefined

        If content is true you can specify content/message that is to be shown in alert body.
   
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
