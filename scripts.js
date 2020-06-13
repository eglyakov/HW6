
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

console.log( str1.match(/(a)(b)+(a)/g) );





