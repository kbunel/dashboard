import { Widget } from './../../models/widget';
import { WidgetsService } from './../../services/widgets.services';
import { Vector } from './../../models/vector';
import { Component, OnInit } from '@angular/core';
import { NB_COL, NB_ROW } from '../../models/widget';

@Component({
  selector: 'app-edit',
  templateUrl: 'edit.component.html'
})
export class EditComponent implements OnInit {

  public inSelection: boolean = false;
  public startPos: Vector;
  public endPos: Vector;
  public widgets: Array<Widget>;

  public constructor( private widgetsService: WidgetsService) { }

  public getCol(): Array<any> {
    return Array(NB_COL);
  }

  public ngOnInit() {
    this.widgetsService.subscribe((widgets: Array<Widget>) => {
      this.widgets = widgets;
    });
  }

  public getRow(): Array<any> {
    return Array(NB_ROW);
  }

  public getBoxStyle(row: number, col: number): any {
    return  {
      left: (col * 100 / NB_COL) + '%',
      top: (row * 100  / NB_ROW) + '%',
      width: (100 / NB_COL) + '%',
      height: (100 / NB_ROW) + '%',
    };
  }

  public select(row: number, col: number) {
    if (this.inSelection) {
      const startAndSize = this.getStartAndSize(this.startPos, this.endPos);
      this.widgets.push(new Widget('created', startAndSize.start, startAndSize.size));
      this.widgetsService.save();
      this.inSelection = false;
    } else {
      this.startPos = new Vector(col, row);
      this.inSelection = true;
    }
  }

  public selectBox() {
    this.select(this.endPos.x, this.startPos.y);
  }

  public hover(row, col) {
    this.endPos = new Vector(col, row);
  }

  public getStartAndSize(start: Vector, end: Vector): { start: Vector, size: Vector } {

    const minStart: Vector = new Vector(start.x, start.y);
    const maxEnd: Vector = new Vector(end.x, end.y);

    if (minStart.x >= maxEnd.x - 1) {
      const pivot = maxEnd.x - 1;
      maxEnd.x = minStart.x + 1;
      minStart.x = pivot;
    }

    if (minStart.y >= maxEnd.y) {
      const pivot = maxEnd.y - 1;
      maxEnd.y = minStart.y + 1;
      minStart.y = pivot;
    }
    const size = maxEnd.sub(minStart);
    return {
      start: minStart,
      size: size,
    };
  }

  public getSelectionStyle() {
    const start: Vector = new Vector(this.startPos.x, this.startPos.y);
    const end: Vector = new Vector(this.endPos.x, this.endPos.y);
    if (this.startPos.x >= this.endPos.x - 1) {
      const pivot = end.x - 1;
      end.x = start.x + 1;
      start.x = pivot;
    }

    if (this.startPos.y >= this.endPos.y) {
      const pivot = end.y - 1;
      end.y = start.y + 1;
      start.y = pivot;
    }
    const distance = end.sub(start);
    return  {
      left: (start.x * 100 / NB_COL) + '%',
      top: (start.y * 100  / NB_ROW) + '%',
      width: (distance.x * 100 / NB_COL) + '%',
      height: (distance.y * 100 / NB_ROW) + '%',
    };
  }
}