class Apple{
    weight;


    constructor() {
        this.weight = 10;
    }

    decrease(){
        if (this.isEmpty()){
            console.log("het tao");
        }else {
            this.weight--;
        }
    }

    isEmpty(){
        return !(this.weight = 0);
    }

    get weight() {
        return this.weight;
    }
}