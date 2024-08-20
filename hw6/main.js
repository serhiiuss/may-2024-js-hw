// - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

let q = 'hello world';
console.log(q.length);
let w = 'lorem ipsum';
console.log(w.length);
let e = 'javascript is cool';
console.log(e.length);

// Перевести до великого регістру наступні стрінгові значення

let z = 'hello world';
const z1 = z.toUpperCase();
console.log(z1);

let x = 'lorem ipsum';
const x1 = x.toUpperCase();
console.log(x1);

let c = 'javascript is cool';
const c1 = c.toUpperCase();
console.log(c1);

// Перевести до нижнього регістру настипні стрінгові значення

let a = 'HELLO WORLD';
const a4 = a.toLowerCase();
console.log(a4);

let b = 'LOREM IPSUM';
const b4 = b.toLowerCase();
console.log(b4);

let cc = 'JAVASCRIPT IS COOL';
const c4 = cc.toLowerCase();
console.log(c4);

// Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = 'dirty string'
const space = str.trim();
console.log(space);

// Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

const stringToArr = (str) => {
    if (str) {
        let split = str.split(' ');
        return split;
    }
    return [''];
}

console.log(stringToArr('Ревуть воли як ясла повні'));

// є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

const num = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
const string = num.map(number => number + '');
console.log(string);

// створити функцію sortNums(array,direction), яка прймає масив чисел,
// та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

let nums = [11,21,3];

function sortNums(array, direction) {
    if (direction === 'ascending') return array.sort((a, b) => a - b);
    if (direction === 'descending') return array.sort((a, b) => b - a);

}

console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));

// є масив
// -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const map = coursesAndDurationArray
    .sort((a, b) => b.monthDuration - a.monthDuration)
    .filter(value => value.monthDuration > 5)
    .map((value, index) => {
        value.id = index + 1;
        return value;
    })

console.log(map);

//  описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше

const suits = ['spade', 'diamond', 'heart', 'club'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];


const cards = [];
for (const suit of suits) {
    for (const value of values) {
        const card = {cardSuits: suit, value: value}
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        } else {
            card.color = 'black'

        }
        cards.push(card)
    }
}
console.log(cards);

console.log(cards.find(card => card.value === 'ace' && card.cardSuits === 'spade'));
console.log(cards.filter(card => card.value === '6'));
console.log(cards.filter(card => card.cardSuits === 'diamond'));
console.log(cards.filter(card => card.cardSuits === 'club' && (card.value !== '6' || card.value !== '7' || card.value !== '8' || card.value !== '9')));

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт


const reduce = cards.reduce((accum, card) => {
    switch (card.cardSuits) {
        case 'spade':
            accum.spades.push(card);
            break;
        case 'diamond':
            accum.diamonds.push(card);
            break;
        case 'club':
            accum.clubs.push(card);
            break;
        case 'heart':
            accum.hearts.push(card);
            break;
    }

    return accum;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});
console.log(reduce);

// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
console.log(coursesArray.filter(course => {
    return course.modules.includes('sass');
}));

console.log(coursesArray.filter(course => {
    return course.modules.includes('docker');
}));