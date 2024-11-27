class Cat extends Animal{

    constructor(name, weight, speed) {
        super(name, weight, speed);
    }

    mouseCatching(rat){
        return this._speed > rat._speed;
    }

    eatRat(rat){
        if (this.mouseCatching(rat)){
            if (rat._status){
                this._weight += rat._weight;
                rat._status = false;
            }else {
                console.log("chuot da chet");
            }
        }
        else {
            console.log("Khong bat duoc chuot;")
        }
    }


    voice(string) {
        super.voice(string);
    }
}