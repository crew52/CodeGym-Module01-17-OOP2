class Animal{
    _name;
    _weight;
    _speed;

    constructor(name, weight, speed) {
        this._name = name;
        this._weight = weight;
        this._speed = speed;
    }

    voice(string){
        console.log(this._name + " : " + string);
    }


    getName() {
        return this._name;
    }

    setName(value) {
        this._name = value;
    }

    getWeight() {
        return this._weight;
    }

    setWeight(value) {
        this._weight = value;
    }

    getSpeed() {
        return this._speed;
    }

    setSpeed(value) {
        this._speed = value;
    }
}