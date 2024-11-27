class Human{
    name;
    gender;
    weight;

    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
        a
    }
    isMale(){
        if(this.gender){
            return true;
        }
        return false;
    }

    checkApple(apple){
        return apppe.isEmpty();
    }

    eat(apple){
        if(apple.getWeight() > 0){
            apple.decrease();
            this.weight++;
        }else {
            alert("Táo đã hết");
        }
    }

    say(string){
        console.log(`${name} : ${string}`);
    }


    getName() {
        return this.name;
    }

    setName(value) {
        this.name = value;
    }

    getGender() {
        return this.gender;
    }

    setGender(value) {
        this.gender = value;
    }

    getWeight() {
        return this.weight;
    }

    setWeight(value) {
        this.weight = value;
    }
}