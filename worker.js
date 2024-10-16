class Worker {
    #name;
    #surname;
    #rate;
    #days;

    constructor(name, surname, rate, days) {
        this.#name = name;
        this.#surname = surname;
        this.#rate = rate;
        this.#days = days;
    }

    getName() {
        return this.#name;
    }

    getSurname() {
        return this.#surname;
    }

    getRate() {
        return this.#rate;
    }

    getDays() {
        return this.#days;
    }

    getSalary() {
        return this.#rate * this.#days;
    }

    setRate(rate) {
        this.#rate = rate;
    }

    setDays(days) {
        this.#days = days;
    }
}

console.log("Тесты класса Worker 1 и 2 часть")

// Пример использования
var worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getName()); //выведет 'Иван'
console.log(worker.getSurname()); //выведет 'Иванов'
console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31

console.log("Тесты класса Worker 3 часть");

//Теперь используем сеттер:
worker.setRate(20); //увеличим ставку
worker.setDays(10); //уменьшим дни
console.log(worker.getSalary()); //выведет 200 - то есть 20*10