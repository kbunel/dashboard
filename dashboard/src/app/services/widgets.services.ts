import { Widget } from './../models/widget';
import { Injectable, EventEmitter } from '@angular/core';
import { Vector } from './../models/vector';

@Injectable()
export class WidgetsService {
  private widgetsMaps: Array<Widget>;

  private widgetsChanges: EventEmitter<Array<Widget>> = new EventEmitter();

  public subscribe(callback: (w: Array<Widget>) => void) {
    if (!this.widgetsMaps) {
      const items = JSON.parse(localStorage.getItem('widgets'));
      if (!items) {
        this.widgetsMaps = [];
      } else {
        this.widgetsMaps = [];
        for (const item of items ) {
          this.widgetsMaps.push(Widget.unSerialize(item));
        }
      }
    }
    const subscription = this.widgetsChanges.subscribe(callback);
    this.widgetsChanges.emit(this.widgetsMaps);
    return subscription;
  }

  public save(): void {
    localStorage.setItem('widgets', JSON.stringify(this.widgetsMaps));
  }
}
