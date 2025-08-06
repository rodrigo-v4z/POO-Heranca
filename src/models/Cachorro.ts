// src/models/Cachorro.ts
import { Animal } from './Animal';

export class Cachorro extends Animal {

  emitirSom(): string {
    const latido = new Audio("/Sons/dog-bark-382732.mp3");
    
    latido.volume = 1.0;
    latido.play();

    return 'Au au!';
  }

  correr() {
    return `${this.getNome()} está correndo!`;
  }
}