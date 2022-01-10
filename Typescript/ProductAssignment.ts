export class ProductAssignment{
    prdID:number=123;
    prdName:String="Junisha";
    prdPrice:number=25
    constructor(i:number,n:string,s:number)
    {
    this.prdID=i;
    this.prdName=n;
    this.prdPrice=s;
    }
    display()
    {
    console.log(this.prdID);
    console.log(this.prdName);
    console.log(this.prdPrice);
    }
}
    function calculateAmount(prdPrice) {
        var totalPrice =prdPrice+(prdPrice*0.18);
        
        return totalPrice
        
        }
    var e1=new ProductAssignment(124,"Toys",240);
    var e2=new ProductAssignment(135,"Teady Bear",250);
    e1.display();
    e2.display();
    console.log(calculateAmount(230));