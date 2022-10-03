import { Carta } from "./carta";

export class Mazo {
    private cartas: Carta[];

    public constructor() {
      this.cartas = [];
      for (let s = 0; s < 4; s++) {
        for (let r = 1; r <= 13; r++) {
          this.cartas.push(new Carta(r, s));
        }
      }
    }
  
    public shuffle(): void {
      this.cartas.sort(() => Math.floor(Math.random() * 3 - 1));
    }
  
    public draw(): Carta {
      return <Carta>this.cartas.shift();
    }
  
    public length(): number {
      return this.cartas.length;
    }
}
