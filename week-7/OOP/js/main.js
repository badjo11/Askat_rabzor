
// Задание №1
// Реализуйте класс Programmer (Программист),
// который будет иметь следующие свойства:
// name (имя),
// surname (фамилия),
// programming_language (язык програмирования).
// Также класс должен иметь метод introduceYourself(),
// который будет выводить информацию о работнике.

class Programmer {
    constructor(name, surname, programming_language) {
        this.name = name
        this.surname = surname
        this.programming_language = programming_language
    }
    introduceYourself() {
        console.log(this.name, this.surname, this.programming_language)
    }
}
let proger = new Programmer('Ivan', 'Vasilyev', 'Java')
// proger.introduceYourself()

// Задание №2
// Модифицируйте класс Worker из предыдущей задачи
// следующим образом: сделайте все его свойства
// приватными, а для их чтения сделайте методы-геттеры.
class Worker {

    constructor(name, surname, programming_language) {
        this.#name = name
        this.#surname = surname
        this.#programming_language = programming_language
    }
    #name
    #surname
    #programming_language
    getName() {
        return this.#name
    }
    getSurname() {
        return this.#surname
    }
    getProgram() {
        return this.#programming_language
    }
}

let worker = new Worker('Vasya', 'Motuev', 'Python')
// console.log(worker.getName(), worker.getSurname(), worker.getProgram())

// Задание №3
// Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(),
// который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(),
// который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву
// заглавной и метод ucWords, который принимает строку и делает
// заглавной первую букву каждого слова этой строки.

class MyString {
    getReverse(str) {
        return str.split("").reverse().join("")
    }
    ucFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
    ucWords(str) {
        str = str.split(" ")
        str = str.map(element => {
            return element.charAt(0).toUpperCase() + element.slice(1)
        });
        return str.join(" ")
    }
}

let str = new MyString()
// console.log(str.getReverse('abcde'))
// console.log(str.ucFirst('abcde'))
// console.log(str.ucWords('abcde abcde abcde'))


// Реализуйте класс Student (Студент), который будет наследовать от класса User.
// Этот класс должен еть следующие свойства: name (имя, наследуется от User),
// surname (фамилия, наследуется от User), year (год поступления в вуз).
// Класс должен иметь метод getFullName() (наследуется от User),
// с помощью которого можно вывести одновременно имя и фамилию студента.
// Также класс должен иметь метод getCourse(), который будет выводить
// текущий курс студента (от 1 до 5).
// Курс вычисляется так: нужно от текущего года отнять год поступления в вуз.
// Текущий год получите самостоятельно.
class User {
    constructor(name, surname) {
        this.name = name
        this.surname = surname
    }
    getFullName() {
        console.log(this.name, this.surname)
    }
}
class Student extends User {
    constructor(name, surname, year) {
        super(name, surname)
        this.year = year
    }
    getCourse() {
        return 2021 - this.year
    }
}
let stud = new Student('aza', 'bai', 2018)
// console.log(stud.getCourse())


// Задание №5
// Реализуйте класс Rectangle.
// У него должны быть следующие свойства: ширина width, высота height. Также у него должны быть
// следующие методы: получить ширину getWidth, установить ширину setWidth, получить высоту getHeight,
// установить высоту setHeight.

class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }
    getWidth() {
        return this.width
    }
    setWidth(width) {
        this.width = width
    }
    getHeight() {
        return this.height
    }
    setHeight(height) {
        this.height = height
    }
}

let rect = new Rectangle(15, 12)
// console.log(rect.getWidth(), rect.getHeight())
rect.setHeight(100)
rect.setWidth(200)
// console.log(rect.getWidth(), rect.getHeight())

// Задание №6
// Реализуйте класс Worker (Работник),
// который будет иметь следующие свойства:
// name (имя),
// surname (фамилия),
// rate (ставка за день работы),
// days (количество отработанных дней).
// Также класс должен иметь метод getSalary(),
// который будет выводить зарплату работника.
// Зарплата - это произведение (умножение)
// ставки rate на количество отработанных дней days.

// Вот так должен работать наш класс:
// var worker = new Worker('Иван', 'Иванов', 10, 31);
class Worker1 {
    constructor(name, surname, rate, days) {
        this.name = name
        this.surname = surname
        this.rate = rate
        this.days = days
    }
    getSalary() {
        return this.rate * this.days
    }
}
let worker1 = new Worker1('Иван', 'Иванов', 10, 31);
// console.log(worker1.getSalary())


// Задание №7
// Модифицируйте класс Worker из предыдущей задачи
// следующим образом: для свойства rate и для
// свойства days сделайте еще и методы-сеттеры.
// Наш класс теперь будет работать так:

// var worker = new Worker('Иван', 'Иванов', 10, 31);

// console.log(worker.getRate()); //выведет 10
// console.log(worker.getDays()); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31

// //Теперь используем сеттер:
// worker.setRate(20); //увеличим ставку
// worker.setDays(10); //уменьшим дни
// console.log(worker.getSalary()); //выведет 200 - то есть 20*10

class Worker2 {
    constructor(name, surname, rate, days) {
        this.name = name
        this.surname = surname
        this.rate = rate
        this.days = days
    }
    setDays(days) {
        this.days = days
    }
    setRate(rate) {
        this.rate = rate
    }
    getSalary() {
        return this.rate * this.days
    }
}
let worker2 = new Worker2('Иван', 'Иванов', 5, 31);
// console.log(worker2.getSalary())
worker2.setDays(20)
worker2.setRate(10)
// console.log(worker2.getSalary())
