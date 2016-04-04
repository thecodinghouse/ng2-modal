import {Directive, Input, HostBinding} from 'angular2/core';

// todo: add animate
// todo: add init and on change
@Directive({selector: '[open]'})
export class Open {
  @HostBinding('style.display')
  private display:string;
  @HostBinding('class.in')
  @HostBinding('attr.aria-expanded')
  private isExpanded:boolean = true;

  @Input()
  private set open(value:boolean) {
    this.isExpanded = value;
    this.toggle();
  }

  private get open():boolean {
    return this.isExpanded;
  }

  constructor() {
  }

  toggle() {
    if (this.isExpanded) {
      this.hide();
    } else {
      this.show();
    }
  }

  hide() {
    this.isExpanded = false;
    this.display = 'none';

    let backDrop = document.getElementsByClassName("modal-backdrop");
    if(backDrop.length>0){
      document.body.removeChild(backDrop[0]);
    }
  }

  show() {
    let backDrop = document.createElement('div');
    backDrop.className="modal-backdrop fade in";
    document.body.appendChild(backDrop);
    this.isExpanded = true;
    this.display = 'block';
  }
}
