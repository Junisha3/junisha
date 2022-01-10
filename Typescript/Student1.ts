class Student1{
    stdId:number;
    stdName:string;
    stdClass:number;

    constructor(i:number , n:string){
        this.stdId = i;
        this.stdName = n;
    }

    display(){
        console.log(this.stdId);
        console.log(this.stdName);
        console.log(this.stdClass);
    }
}

var e1 = new Student1(323,"Naram" );
e1.display();

