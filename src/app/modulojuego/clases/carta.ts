import { Palo } from "./palo";

export class Carta {
    public readonly valor: number;
    public readonly palo: number;

    public constructor(valor: number, palo: Palo) {
        this.valor = valor;
        this.palo = palo;
    }

    private static valoresCarta = [
        'A',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J',
        'Q',
        'K',
    ];

    public get valorNombre(): string {
        return Carta.valoresCarta[this.valor - 1];
    }

    public get paloNombre(): string {
        return Palo[this.palo];
    }

    public get nombre(): string {
        return this.valorNombre + ' de ' + this.paloNombre;
    }
}

