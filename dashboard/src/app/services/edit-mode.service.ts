import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EditMode {
  public isEdit: boolean = false;
  public editChange: EventEmitter<boolean> = new EventEmitter();

  public toogleEdit() {
    this.isEdit = !this.isEdit;
    this.editChange.emit(this.isEdit);
  }
}
