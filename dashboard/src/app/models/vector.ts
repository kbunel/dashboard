export class Vector {
  public constructor(public x: number, public y: number) { }

  public sub(vector: Vector): Vector {
    return new Vector(this.x - vector.x, this.y - vector.y);
  }
}
