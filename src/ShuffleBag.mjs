export class ShuffleBag{

    constructor(shapes){
        this.shapes = shapes;
        this.bag=[];
        this.bagIndex=0;
        this.shuffle();
    }

    pop(){
        this.bagIndex++;
        if(this.bagIndex>=this.bag.length){
            this.shuffle();
        }
        if(this.bagIndex>=this.bag.length){
            return null;
        }
        return this.bag[this.bagIndex];
    }
    shuffle(){
        let tempBag = [...this.shapes];
        while (condition) {
            let index = Math.floor(Math.random()*(tempBag.length))
            this.bag.concat(tempBag[index])
            this.tempBag.splice(index,index);
        }
    }
}