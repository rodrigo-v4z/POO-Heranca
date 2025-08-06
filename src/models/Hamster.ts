import { Animal } from "./Animal";

export class Hamster extends Animal{
    emitirSom(): string {
        const somRato = new Audio("/Sons/tikus-220067.mp3");

        somRato.volume = 1.0;

        somRato.play();

        return "ricricric";
    }

    comerSemente(): string {
        return "Hmm...estou de barriga cheia"
    }
}