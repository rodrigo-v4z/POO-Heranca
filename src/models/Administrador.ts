import { Usuario } from "./Usuario"

export class Administrador extends Usuario {
    #codigo_seguranca = 'abc';

    autenticarCodigoSeguranca(tentativa: string): boolean {
        if(tentativa === this.#codigo_seguranca){
            return true;
        }
        else{
            return false;
        }
    }

    alterarCodigoSeguranca(novo_codigo: string){
        this.#codigo_seguranca = novo_codigo;
    }
}