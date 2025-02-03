export class ShuffleBag{

    constructor(shapes){
        this.shapes = shapes;
        this.bag=[];
        this.bagIndex=0;
        this.shuffle();
    }

    pop(){
        if(this.bagIndex+1>=this.bag.length){
            this.shuffle();
        }
        if(this.bagIndex+1>=this.bag.length){
            return null;
        }
        return this.bag[this.bagIndex++];
    }
    shuffle(){
        console.log("shuffled")
        var tempBag = [...this.shapes];
        for (let i = 0; i < this.shapes.length; i++) {
            let index = Math.floor(Math.random()*(tempBag.length))
            this.bag.push(tempBag[index])
            tempBag.splice(index,1);
        }
        this.bagIndex=0
    }
}