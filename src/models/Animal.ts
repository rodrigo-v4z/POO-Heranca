// src/models/Animal.ts
export class Animal {
  #nome: string;
  
  constructor(nome: string) {
    this.#nome = nome;
  }

  getNome(): string {
    return this.#nome;
  }

  emitirSom(): string {
    return 'Som genérico de animal';
  }
}