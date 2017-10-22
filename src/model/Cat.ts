
export class Cat {
   private id : number;
   private name : string;
   private type : string;
   
   constructor(name : string , type : string){
        this.name = name;
        this.type = type;
   }

   public set setName(name : string){
       this.name =name;
   }
   public get getName() : string {
       return this.name;
   }

   public set setType(type : string ){
       this.type= type;
   }

   public get getType() : string {
       return this.type;
   }

}
