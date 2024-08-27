function User(id, name, surname, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.phone = phone;

}

let users = [
    new User(1, 'vasya', 'asd', '+34543453455'),
    new User(2, 'vasya', 'asd', '+34543453455'),
    new User(3, 'vasya', 'asd', '+34543453455'),
    new User(4, 'vasya', 'asd', '+34543453455'),
    new User(5, 'vasya', 'asd', '+34543453455'),
    new User(6, 'vasya', 'asd', '+34543453455'),
    new User(7, 'vasya', 'asd', '+34543453455'),
    new User(8, 'vasya', 'asd', '+34543453455'),
    new User(9, 'vasya', 'asd', '+34543453455'),
    new User(10, 'vasya', 'asd', '+34543453455')
]
console.log(users)

////////////////////////////////////////////////

const filterFunction = (user) => user.id % 2 === 0

console.log(users.filter(filterFunction));

////////////////////////////////////////////////

const sortFunction = (user1, user2) => user1.id - user2.id

console.log(users.sort(sortFunction));

////////////////////////////////////////////////

function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

function Product(title, price) {
    this.title = title;
    this.price = price;
}

let clients = [
    new Client(1, 'vasya', 'asd', 'qweasdf@gmail.com', '+35345354353', [new Product('tv', '15000')], [new Product('phone', '25000')]),
    new Client(2, 'vasya', 'asd', 'qweasdf@gmail.com', '+35345354353', [new Product('tv', '15000')], [new Product('phone', '25000')]),
    new Client(3, 'vasya', 'asd', 'qweasdf@gmail.com', '+35345354353', [new Product('tv', '15000')], [new Product('phone', '25000')]),
    new Client(4, 'vasya', 'asd', 'qweasdf@gmail.com', '+35345354353', [new Product('tv', '15000')], [new Product('phone', '25000')]),
    new Client(5, 'vasya', 'asd', 'qweasdf@gmail.com', '+35345354353', [new Product('tv', '15000')], [new Product('phone', '25000')]),
    new Client(6, 'vasya', 'asd', 'qweasdf@gmail.com', '+35345354353', [new Product('tv', '15000')], [new Product('phone', '25000')]),
    new Client(7, 'vasya', 'asd', 'qweasdf@gmail.com', '+35345354353', [new Product('tv', '15000')], [new Product('phone', '25000')]),
    new Client(8, 'vasya', 'asd', 'qweasdf@gmail.com', '+35345354353', [new Product('tv', '15000')], [new Product('phone', '25000')]),
    new Client(9, 'vasya', 'asd', 'qweasdf@gmail.com', '+35345354353', [new Product('tv', '15000')], [new Product('phone', '25000')]),
    new Client(10, 'vasya', 'asd', 'qweasdf@gmail.com', '+35345354353', [new Product('tv', '15000')], [new Product('phone', '25000')]),

];
console.log(clients)

////////////////////////////////////////////////

let clients2 = [
    new Client(1, 'vasya', 'asd', 'qweasdf@gmail.com', '+35345354353', [{title: 'tv', price: 15000}, {
        title: 'tv',
        price: 15000
    }, {title: 'tv', price: 15000}]),
    new Client(2, 'vasya', 'asd', 'qweasdf@gmail.com', '+35345354353', [{title: 'phone', price: 25000}, {
        title: 'tv',
        price: 15000
    }]),
    new Client(3, 'vasya', 'asd', 'qweasdf@gmail.com', '+35345354353', [{title: 'tv', price: 30000}]),
    new Client(4, 'vasya', 'asd', 'qweasdf@gmail.com', '+35345354353', [{title: 'phone', price: 10000}, {
        title: 'tv',
        price: 25000
    }, {title: 'tv', price: 13000}, {title: 'phone', price: 15000}]),

];

const sort = clients2.sort((a, b) => a.order.length - b.order.length)
console.log(sort)

////////////////////////////////////////////////

function Car(mode, producer, year, maxSpeed, engineVolume) {

    this.mode = mode;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info = function () {
        for (const key in this) {
            console.log(key, this[key]);
        }
    };
    this.increaseMaxSpeed = function (speedAdd) {
        if (speedAdd > 0) this.maxSpeed = this.maxSpeed + speedAdd;
    };
    this.changeYear = function (year) {
        if (year > 1815) this.year = year;
    };
    this.addDriver = function (driver) {
        if (driver) this.driver = driver
    }
}

const car = new Car('asd', 'zxc', 1999, 200, 10)
car.drive()
car.info()
car.increaseMaxSpeed()
car.changeYear(2001)
car.addDriver()
console.log(car);

////////////////////////////////////////////////

class Car2 {
    constructor(mode, producer, year, maxSpeed, engineVolume) {
        this.mode = mode;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };

    info() {
        for (const key in this) {
            console.log(key, this[key]);
        }
    };

    increaseMaxSpeed(speedAdd) {
        if (speedAdd > 0) this.maxSpeed = this.maxSpeed + speedAdd;
    };

    changeYear(year) {
        if (year > 1815) this.year = year;
    };

    addDriver(driver) {
        if (driver) this.driver = driver
    }
}

const car2 = new Car2('asd', 'zxc', 1999, 200, 10)
car2.drive()
car2.info()
car2.increaseMaxSpeed()
car2.changeYear(2001)
car2.addDriver()
console.log(car2);

////////////////////////////////////////////////

class Cinderella {

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {

    constructor(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}

const cinderellas = [
    new Cinderella('asd1', 25, 34),
    new Cinderella('asd2', 26, 35),
    new Cinderella('asd3', 27, 36),
    new Cinderella('asd4', 28, 37),
    new Cinderella('asd5', 29, 38),
    new Cinderella('asd6', 30, 39),
    new Cinderella('asd7', 31, 40),
    new Cinderella('asd8', 32, 41),
    new Cinderella('asd9', 33, 42),
    new Cinderella('asd10', 34, 43)
];

const prince = new Prince('qwe', 123, 37)

for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.slipper) {
        prince.wife = cinderella
    }
}

const cinderellaMain = cinderellas.find(cinderella => cinderella.footSize === prince.slipper);
console.log(prince.wife = cinderellaMain);

////////////////////////////////////////////////

Array.prototype.myForEach = function (callback) {
    const array = this
    for (const arrayElement of array) {
        callback(arrayElement);
    }
};

[11, 22, 33].myForEach((x) => {
    console.log(x)
});

Array.prototype.myFilter = function (callback) {
    const arr = [];
    for (const item of this) {
        if (callback(item)) {
            arr.push(item);
        }
    }
    return arr;
};

let user = [
    {name: 'vasya', age: 31, status: false},
    {name: 'vasya', age: 31, status: true},
    {name: 'vasya', age: 31, status: false},
    {name: 'vasya', age: 31, status: true},
    {name: 'vasya', age: 31, status: false},
];
const result = user.myFilter((user) => user.status);

console.log(result)