## ng2-modal

An angular2 customizable modal using bootstrap.


### Dependencies

ng2-modal depends on bootstrap, you'll need to include link before ng2-simple-modal:

```<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">```


### How to use-
- Clone or download the repository.
- Add the directory components/modal into your angular2 app.
- Use it as <modal></modal> or <alert></alert> in the view of the desired component.


### Methods
`open(component?)`
  Opens a modal. Component is optional. If the component is given it is loaded dynamically in modals body.

`close(data?)`
  Close method first dispose the component if exist and then close the modal.It emits modalOutput.This method emits          modalOutput value i.e. data if it is given. It is called when cancel button is clicked.

`submit()`
submit method dispose the component and then close the modal. This method emits modalOutput value true to provide a callback. It is called when ok button is clickedx.

### ModalHeaderComponent

#####Property

`modalHeader`: boolean, default:true
Show or hide the header. Specify true to show.

`modalTitle`: string, default: undefined
If modalHeader is true you can specify title in modalTitle.


### ModalBodyComponent

#####Property

`content`: boolean, default: true
show or hide the content specified in modal body. Specify true to show.

`contentString`: string, default: undefined
If content is true you can specify content/message that is to be shown in modal body.


### ModalFooterComponent


#####Property

`modalFooter`: boolean, default:true
Show or hide the footer. Specify true to show.

`okButton`: boolean, default: true
show or hide the ok button.

`okButtonText`: string, default: Ok
If okButton is true you can specify text of the button in okButtonText.

`cancelButton`: boolean, default: true
show or hide the cancel button.

`cancelButtonText`: string, default: Cancel
If cancelButton is true you can specify text of the button in cancelButtonText.
