class Tshirt{

    color:string;

    material:string;

    design:string;

    constructor(i:string,n:string,s:string){

        this.color=i;

        this.material=n;

        this.design=s;

    }

    display()

    {

        console.log(this.color);

        console.log(this.material);

        console.log(this.design);

    }

}

var small=new Tshirt("Blue","Polyster","Round");

small.display();

var large=new Tshirt("Pink","Poly","V Shaped");

large.display();

var xtra=new Tshirt("Brown","Nylon","Sleeves");

xtra.display();