import { Widget } from './../../models/widget';
import { WidgetsService } from './../../services/widgets.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: 'display.component.html',
})
export class DisplayComponent implements OnInit {

  public widgets: Array<Widget>;

  public constructor( private widgetsService: WidgetsService) { }

  public ngOnInit() {
    this.widgetsService.subscribe((widgets: Array<Widget>) => {
      this.widgets = widgets;
    });
  }
}
