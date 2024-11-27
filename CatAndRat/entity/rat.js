class Rat extends Animal{
    _status;

    constructor(name, weight, speed) {
        super(name, weight, speed);
        this._status = true;
    }

    voice(string) {
        super.voice(string);
    }
}