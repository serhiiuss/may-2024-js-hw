// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль //
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbersArray)

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre //
let book = {
    title: 'The Boys',
    pageCount: 32,
    genre: 'fantasy',
}
console.log(book)

let book2 = {
    title: 'Berserk',
    pageCount: 48,
    genre: 'fantasy',
}
console.log(book2)

let book3 = {
    title: 'game of thrones',
    pageCount: 864,
    genre: 'fantasy',
}
console.log(book3)
// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом.
// Кожен автор має поля name та age.//

let object = [
    {authors: [{name: 'lorem', age: '2134'}], title: 'Iron 2134', genre: 'fantasy', pageCount: '656'},
    {authors: [{name: 'lorem', age: '2134'}], title: 'Iron 2134', genre: 'fantasy', pageCount: '656'},
    {authors: [{name: 'lorem', age: '2134'}], title: 'Iron 2134', genre: 'fantasy', pageCount: '656'}
]
console.log(object);

// Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {user: name = 'Geogre', username: 'george1995', password: 'george1995pw'},
    {user: name = 'Geogre', username: 'george1995', password: 'lorem'},
    {user: name = 'Geogre', username: 'george1995', password: 'lorem22'},
    {user: name = 'Geogre', username: 'george1995', password: 'lorem321312'},
    {user: name = 'Geogre', username: 'george1995', password: 'lorem32131'},
    {user: name = 'Geogre', username: 'george1995', password: 'lorempw'},
    {user: name = 'Geogre', username: 'george1995', password: 'lorempass'},
    {user: name = 'Geogre', username: 'george1995', password: 'lorem3333'},
    {user: name = 'Geogre', username: 'george1995', password: 'loremdssss'},
    {user: name = 'Geogre', username: 'george1995', password: 'loremsssss'}
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

//описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати.
// Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

let temperatures = [
    {morning: 15, afternoon: 23, evening: 18}, // День 1
    {morning: 14, afternoon: 22, evening: 17}, // День 2
    {morning: 16, afternoon: 24, evening: 19}, // День 3
    {morning: 15, afternoon: 23, evening: 18}, // День 4
    {morning: 13, afternoon: 21, evening: 16}, // День 5
    {morning: 12, afternoon: 20, evening: 15}, // День 6
    {morning: 14, afternoon: 22, evening: 17}  // День 7
];

temperatures.forEach((dayTemps, index) => {
    console.log(`День ${index + 1}: Ранок: ${dayTemps.morning}°C, День: ${dayTemps.afternoon}°C, Вечір: ${dayTemps.evening}°C`);
});


// // Логічні розгалуження
//Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x = 1;
// let x = 0;
let x = -3
x !== 0 ? console.log(true) : console.log(false);

// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = prompt('введіть число');

if (time >= 0 && time <= 14) {
    console.log('В першу частину години');
}
if (time >= 15 && time <= 30) {
    console.log('В другу частину години.');
}
if (time >= 31 && time <= 45) {
    console.log('В третю частину години.');
}
if (time >= 46 && time <= 59) {
    console.log('В четверту частину години.');
}

// У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = prompt('введіть число');

if (day >= 1 && day <= 11) {
    console.log('В першу частину декаду');
}
if (day >= 12 && day <= 22) {
    console.log('В другу частину декаду.');
}
if (day >= 23 && day <= 31) {
    console.log('В третю частину декаду.');
}
// Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let sss = prompt('enter number')
switch (sss) {
    case'1':
        console.log('Monday');
        break;
    case'2':
        console.log('Tuesday');
        break;
    case'3':
        console.log('Wednesday');
        break;
    case'4':
        console.log('Thursday');
        break;
    case'5':
        console.log('Friday');
        break;
    case'6':
        console.log('Saturday');
        break;
    case'7':
        console.log('Sunday');
        break;
    case'0':
        console.log('undefined');
        break;
}
//  Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
let a = 1
let b = 2
if (a === b) {
    console.log(a, 'i', b, 'числа рівні');

} else if (a > b) {
    console.log(a, 'більше за', b);
} else if (a < b) {
    console.log(a, 'менше за', b);
}
// є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).



//

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (let i = 0; i < coursesAndDurationArray.length; i++) {
    if (coursesAndDurationArray[i].monthDuration > 5) {
        console.log(coursesAndDurationArray[i].title + " - Супер");
    }
}