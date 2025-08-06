export class Usuario {
    #nome: string;
    #email: string;
    #senha: string;

    constructor(email: string) {
        this.#nome = email;
        this.#email = email;
        this.#senha = '123';
    }

    getNome(){
        return this.#nome;
    }

    getEmail(){
        return this.#email;
    }

    autenticar(tentativa: string): boolean {
        if(tentativa == this.#senha){
            return true;
        }
        else{
            return false;
        }
    }
}