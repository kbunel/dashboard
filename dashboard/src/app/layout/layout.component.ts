import { EditMode } from './../services/edit-mode.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {
  public inEdit: boolean = false;

  public constructor(private editMode: EditMode) { }

  public ngOnInit() {
    this.editMode.editChange.subscribe((mode: boolean) => {
      this.inEdit = mode;
    });
  }
}
