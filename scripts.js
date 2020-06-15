
// 1. 

console.log('aaa@bbb@ccc'.replace(/@/gi, '!'));


// 2.

let date = '2025-12-31';

let result = date.replace(/(2025)(-)(12)(-)(31)/, '$5$2$3$4$1');
console.log(result.replace(/-/g, '/'));


// 3.

let str = 'я учу javascript!';

console.log(str.slice(2, 5));
console.log(str.substr(2, 3));
console.log(str.substring(2, 5));

console.log(str.slice(6, 16));
console.log(str.substr(6, 10));
console.log(str.substring(16, 6));


// 4.

let arr = [4, 2, 5, 19, 13, 0, 10],
    sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i], 3);
}

console.log(Math.sqrt(sum));


// 5.

let a = 3,
    b = 5,
    c = Math.abs(a - b);

console.log(c);    


// 6.

date = new Date();

let month = date.getMonth(),
    day = date.getDate();

function addZero() {
    if (date.getMonth() <= 9) month = '0' + date.getMonth();
    if (date.getDate() <= 9) day = '0' + date.getDate();
}

addZero();

let dateNow = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()  + ' ' + day + '/' + month + '/' + date.getFullYear();
console.log(dateNow);


// 7.

let str1 = 'aa aba abba abbba abca abea';

console.log( str1.match(/ab+a/g) );


// 8.

function checkedPhone() {
    let phone = '+375(42)5234567',
        regexp = /\+?375(\s?-?\(?)([1-9]{2})(\s?-?\)?)([1-9])([0-9]{6})$/g;

    console.log(regexp.test(phone));
}

checkedPhone();

function checkedPhoneLite() {
    let phone = '(29)1234567',
        regexp = /(\s?-?\(?)([1-9]{2})?(\s?-?\)?)[1-9][0-9]{6}$/g;

    console.log(regexp.test(phone));
}

checkedPhoneLite();


// 9.

let url = 'https://tech.online.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3';

function getUrlPart() {

    let domen = /http(s)?:\/{2}(([a-z0-9\-]+\.)+)?(([a-z0-9\-]+){2}\.){1}[a-z]{2,}/g,
        notParamets = /\/(([a-z0-9\-]+)\/)+/g,
        paramets = /\?[\w\=\&\-]+/g;
        hash = /#[a-z0-9]+/g;

    if (domen.test(url)) console.log('Домен - ' + url.match(domen));
    else console.log('Не верный домен');

    if (notParamets.test(url)) console.log('Остальная часть адреса - ' + url.match(notParamets));

    if (paramets.test(url)) console.log('Параметры - ' + url.match(paramets));

    if (hash.test(url)) console.log('Хеш - ' + url.match(hash));

}

getUrlPart();


// 10.

let str3 = 'hello hello hello hello world hello';

function delRepeat() {
        regexp = /[a-z]+/g;
    let arr1 = str3.match(regexp);
        arr2 = [];

    for (i = 0; i < arr1.length; i++) {
        if (!~arr2.indexOf(arr1[i])) arr2.push(arr1[i]);
    }

    console.log(arr2.join(' '));
}

delRepeat();






