class Car {
    #brand;
    #model;
    #yearOfManufacturing;
    #maxSpeed ;
    #maxFuelVolume;
    #fuelConsumption ;
    #currentFuelVolume = 0;
    #isStarted = false;
    #mileage = 0;

    set brand(value){
        if (value.length < 1 || value.length >= 50) throw new Error('invalid value');
        this.#brand = value;
    }

    get brand(){
        return this.#brand;
    }

    set model(value){
        if (value.length < 1 || value.length >= 50) throw new Error('invalid value');
        this.#model = value;
    }

    get model(){
        return this.#model;
    }

    set yearOfManufacturing(value){
        if (value < 1900 || value >= new Date().getFullYear()) throw new Error('invalid value');
        this.#yearOfManufacturing = value;
    }

    get yearOfManufacturing(){
        return this.#yearOfManufacturing;
    }

    set maxSpeed(value){
        if (value < 100 || value > 300) throw new Error('invalid value');
        this.#maxSpeed = value;     
    }

    get maxSpeed() {
        return this.#maxSpeed;
    }

    set maxFuelVolume(value) {
        if (value < 5 || value > 20) throw new Error('invalid value');
        this.#maxFuelVolume = value;     
    }

    get maxFuelVolume(){
        return this.#maxFuelVolume;
    }

    set fuelConsumption(value){
        this.#fuelConsumption = value;  
    }

    get fuelConsumption(){
        return this.#fuelConsumption;
    }

    get currentFuelVolume(){
        return this.#currentFuelVolume;
    }

    get isStarted(){
        return this.#isStarted;
    }

    get mileage(){
        return this.#mileage;
    }   

    start() {
        if (this.#isStarted === true) throw new Error('Машина уже заведена');
        else this.#isStarted = true;
    }

    shutDownEngine() {
        if (this.#isStarted === false) throw new Error('Машина еще не заведена');
        else this.#isStarted = false;
    }

    fillUpGasTank(fuel) {
        if (!Number.isInteger(fuel)) throw new Error('Неверное количество топлива для заправки');
        else
        if (fuel < 0 || fuel === 0) throw new Error('Неверное количество топлива для заправки');
        else
        if (this.#currentFuelVolume >= 20) throw new Error('Топливный бак переполнен');
        else this.#currentFuelVolume += fuel;
    }

    drive(speed,hours) {
        if (!Number.isInteger(speed) || speed <= 0) throw new Error('Неверная скорость');
        else
        if (!Number.isInteger(hours || hours <= 0)) throw new Error('Неверное количество часов');
        else
        if (speed > this.#maxSpeed) throw new Error('Машина не может ехать так быстро');
        else 
        if (this.#isStarted === false) throw new Error('Машина должна быть заведена, чтобы ехать');
        else 
        if (this.#currentFuelVolume === 0) throw new Error('Недостаточно топлива');
        else {
            this.#mileage += speed * hours;
            this.#fuelConsumption = this.#fuelConsumption / 100;
        }
    }
}


let car = new Car;
car.brand = 'm';
car.brand = '';
console.log(car.brand);