import {Cat} from "../model/Cat";

export interface ICat {
    save(cat : Cat) : void;
    loadData(cb : any) : void;
    delete(idCat : number) : void;
}