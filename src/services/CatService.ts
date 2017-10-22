import {ICat} from "./ICatInterface";
import {Cat} from "../model/Cat";
import * as $ from "jquery";






export class CatService implements ICat{



    save(cat: Cat) : void{
        $.ajax({
            url : "http://localhost/typescript-jquery1/back-end/insert.php",
            data : {name : cat.getName , type : cat.getType},
            method : "POST",
        }).then((response)=>{
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        });
    }

    

    loadData( cb : any): void {        
        
        $.get({url :"http://localhost/typescript-jquery1/back-end/select.php"}).
        
        
        then((response)=>{
            let jsonArr = JSON.parse(response);
            cb(jsonArr.cat);
        }).catch((error)=>{
            cb(error);
        });
    }

    delete(idCat: number): void {
    }
    
}