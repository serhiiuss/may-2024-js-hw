// 1 створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let calculator = function (a,b){
    let result = a + b * 2;
    return result;
}
// 2 створити функцію яка обчислює та повертає площу кола з радіусом r


// 3 створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// 4 створити функцію яка приймає масив та виводить кожен його елемент
        function foo(){
            let text = `asd,qwe,zxc`
            console.log(text)
        }

// 5 створити функцію яка створює параграф з текстом. Текст задати через аргумент
        function who(){
            document.write(`<p>${text}</p>`);

        }
        who('hello');


// 6 створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий
        function licreat(text){
            document.write(`<ul>`);
            document.write(`<li>${text}</li>`);
            document.write(`<li>${text}</li>`);
            document.write(`<li>${text}</li>`);
            document.write(`</ul>`);
        }



// 7 створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл
        function foob(text,num){
            document.write(`<ul>`)
            for (let i = 0; i < num; i++) {
                document.write(`<div>${text}</div>`)
            }
            document.write(`</ul>`)
        }
        foob('qwe', 1)

// 8 створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
        const array = [1,2,'hello',true,false[1,2,3]];

        function foo1(arr){
            document.write(`<ul>`);
            for (const item of arr) {
                document.write(`<li>${item}</li>`);
            }
            document.write(`</ul>`);
        }
        foo1(array);

// 9 створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок
        function foz(object) {
            for (item  of object) {
                document.write(`<div>${item.id}${item.name}${item.age}</div>`);
            }


// 10 створити функцію яка повертає найменьше число з масиву
            function min(numbers){
                let min = numbers[0];
                for (const number of numbers) {
                    if (min > number);{
                        min = number
                    }
                }
                return min;
            }
            min([-11, -22, -33]);
// 11 створити функцію sum(arr)яка приймає масив чисел,
// сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
            function sum(numbers) {
                let basket = 0;
                for (const number of numbers) {
                    basket = basket + numbers;
                }
                return basket;
            }


// 12 створити функцію swap(arr,index1,index2).
// Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
            function sw(arr, index1, index2 ){
                let v1 = arr[index1];
                let v2 = arr[index2];
                arr[index1] = v2;
                arr[index2] = v1;
            }
            sw ([11,22,33,44,55]);
// 13 Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
            function exchange(uah,currencies,exitCurrency){
                for (item  of currencies) {
                    if (item.currency === exitCurrency){
                        return uah / item.value;
                    }
                }
            }
    }
    exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250