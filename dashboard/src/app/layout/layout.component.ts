import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  public array: Array<void> = Array(12);

  public nbCol: number = 12;
  public nbRow: number = 12;

  public map: Array<Widget> = [
    {
      name: 'truc',
      position: {
        x: 0,
        y: 2
      },
      size: {
        x: 6,
        y: 2
      }
    },
    {
      name: 'truc 2',
      position: {
        x: 0,
        y: 0
      },
      size: {
        x: 6,
        y: 2
      }
    },
    {
      name: 'truc 3',
      position: {
        x: 6,
        y: 0
      },
      size: {
        x: 2,
        y: 6
      }
    }
  ];
  public getPositionAndSize(widget: Widget): any {
    const obj = {
      left: (widget.position.x * 100 / this.nbCol) + '%',
      top: (widget.position.y * 100 / this.nbRow) + '%',
      width: (widget.size.x * 100 / this.nbCol) + '%',
      height: (widget.size.y * 100 / this.nbRow) + '%',
    };
    return obj;
  }
}

interface Vector {
  x: number;
  y: number;
}

interface Widget {
  name: String;
  position: Vector;
  size: Vector;
}
