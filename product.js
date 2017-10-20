function Product(n,p,s,w){
    this.name = n;
    this.price = p;
    this.size = s;
    this.weight = w;

    this.totalCost = function(taxrate){

        return this.price*(1+taxrate);
    };

}
function main(){
    let tv = new Product('sony tv',299.99,50,20);
    console.log(tv.totalCost(0.08));
}

main();
