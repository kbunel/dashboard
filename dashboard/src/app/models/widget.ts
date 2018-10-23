import { Vector } from './vector';

export const NB_COL = 12;
export const NB_ROW = 12;

export class Widget {

  public static unSerialize(obj: any): Widget  {
    return new Widget(obj.name, new Vector(obj.position.x, obj.position.y), new Vector(obj.size.x, obj.size.y));
  }

  public constructor( public name: String, public position: Vector, public size: Vector) {
  }

  public getPositionAndSize(): any {
    const obj = {
      left: (this.position.x * 100 / NB_COL) + '%',
      top: (this.position.y * 100  / NB_ROW) + '%',
      width: (this.size.x * 100 / NB_COL) + '%',
      height: (this.size.y * 100 / NB_ROW) + '%',
    };
    return obj;
  }
}
