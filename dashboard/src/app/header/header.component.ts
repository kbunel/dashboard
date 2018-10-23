import { EditMode } from './../services/edit-mode.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: [ 'header.component.scss' ]
})
export class HeaderComponent {

  public constructor(public editMode: EditMode) {
  }

  public toggleEditMode() {
    this.editMode.toogleEdit();
  }
}
