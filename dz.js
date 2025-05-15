//let a= 10;   .. четное енечетное число

//if (a % 2 === 0)  {
  //  console.log("Четное");

//} else {
  //  console.log("Нечетное");
//}

//const num = 97567;  // первая цифра числа в консоль
//const firstDigitStr = String(num)[0];
//console.log(firstDigitStr);
//console.log(typeof firstDigitStr);

//const firstDigitNum = Number(firstDigitStr);
//console.log(firstDigitNum);
//console.log(typeof firstDigitNum);

//let num = 234567;  // последняя цифра числа
//let lastDigit = num % 10;
//console.log(lastDigit);

//function getFirstDigit(num) {  //первая цифра в консоль
//    return Number(String(num)[0]);
//}
//console.log(getFirstDigit(8903409));


//let num = 349879;   // перва и последняя цифра сумма
//let lastDigit = num % 10;
//function getFirstDigit(num) {
//    return Number(String(num) [0]);
//}
//console.log( getFirstDigit(num) + lastDigit );

//let num = 409876543; //колличество цифр в числе в консоль
//let str = String(num);
//console.log(str.length);


//function hasRepetingdigits (N) {  // повторяется ли цифра в числе
//    return (/([0-9]).*?\1/).test(N);
//}
// console.log( [234, 474, 367643554, 348678, 8576].map(hasRepetingdigits))




//function checkLastDigit(num) {   //совпадают ли последние цифры
//    let lastDigit1 = num1 % 10;
//    let lastDigit2 = num2 % 10;
 //   return  lastDigit1 === lastDigit2;
//let num1 = 34567;
//let num2 = 33457;
// let result = checkLastDigit(num1, num2);
//console.log(result);


//let i = 1;   // вывести в консоль все целые числа от 1 до 100
//while (i <= 100) {
//    console.log(i)
//    i++
//};

//let i = -100; // вывести в консоль все целые числа от -100 до 0
//while (i <= 0) {
//    console.log(i)
//    i++
//};


//let i = 100; // вывести в консоль все целые числа от 100 до 1
//while (i >= 1) {
//    console.log(i)
//    i--
//};

//let line = [];
//let i = 1;   // Выведите в консоль все четные числа из промежутка от 1 до 100.
//for ( let i = 2; i <= 100; i = i + 2) {
 //   line.push(i);
 //    if ((i + 2) % 10 === 0) {
 //   console.log(line);
 //   line =[]
 //    }
//}

//let line = [];
//let sum = 0;   // Найдите сумму всех целых четных чисел в промежутке от 1 до 100. НЕ ПОЛУЧИЛОСЬ
//for (let i = 1; i <= 100;  i++) {
//    line.push(i);
//}
//   if ( i % 2 === 0) {
//        sum += i;
//}
//    console.log(sum)


//  let a = 26;
//  let b = 5;          //Даны два целых числа. Найдите остаток от деления первого числа на второе.
//let remainder = a % b;
//console.log(remainder);


//function squareSum(numbers){    //Дан массив с числами. Найдите сумму квадратов элементов этого массива.
//    let result = 0;
//    numbers.forEach(function(item) {
//        result += Math.pow(item, 2);
//    });
//    return result;
//}
//console.log( squareSum([1, 1, 1]) );

//let string = 'abcde';   //из строки получить массив букв
//let a = string.split('');
//console.log(a);

//let string = '12345';  // получить массив цифр этого числа
//let a = string.split ('');
//console.log(a);


//let array = [];   //Заполните массив целыми числами от 1 до 10.

//for (let i =1;i <= 10; i++) {
//    array.push(i);
//}
//console.log(array);


//let array = [];  //Заполните массив четными числами из промежутка от 1 до 100.
//let i = 2;
 //for (let i = 2; i <= 100; i = i + 2) {
//     array.push(i);

//     if (i % 2 === 0) {

//         console.log(array);
//     }
// }


//let Array = ['1.456', '2.125', '3.32', '4.1', '5.34'];    //НЕ ПОЛУЧИЛОСЬ округлить массив до одного знаа в дробной части
//let obj1 = Object.assign({}, array);

//console.log(obj1);




//let arrayThree = ['https://qna.habr.com/q/1233212?ysclid=m8k93rwjg043903490', '93rwjg043903490', 'cbhdbhcsbcdbchbdscb', 'http://web-dev.guru/javascript/okruglenie-chisla-v-js/', 'http://' ]
//let letter = 'https://';   // оставить в массиве только тк строки,
//которые начинаются на http://

//function functionFiltersItems (elementArray,elementLetter) {
//    return elementArray.filter((element) => element.startsWith(elementLetter));
//}
//console.log(functionFiltersItems(arrayThree,letter));



//let numbers = [1, 40, 5, 89, 22];    // НЕ ПОЛУЧИЛОСЬ в массиве увеличить каждое число на 10%
//let squares = numbers.map(n => n * 10);
//console.log(squares);


//function getRandomInt(min, max) {
//     return (Math.random() * (max - min)) + min;
//
//
// }
// console.log(getRandomInt(1,100));




//let arr = [];  //заполните массив случайными числами из промежутка от 1 до 100.
//while(arr.length < 8){
//    let r = Math.floor(Math.random() * 100) + 1;
//    if(arr.indexOf(r) === -1) arr.push(r);
//}
//console.log(arr);


//let array1 = [1, 2, 3];   // сделать из двух массивов один
//let array2 = [4, 5, 6];
//let array3 = array1.concat(array2);
//console.log(array3);














let inventory =[
    { id: 1, name: "Apple", price: 0.50, quantity: 200 },
    { id: 2, name: "Banana", price: 0.30, quantity: 150 },
    { id: 3, name: "Cherry", price: 0.90, quantity: 50 }
]

//let allProducts = inventory.map(i => {
 //   return i.name
//})
//console.log("Продукты на складе :", allProducts)

//let allProductsNames = inventory.map(products => products.name).join(`,`)
//console.log( `Продукты на складе: ${allProductsNames}`)


//let name = inventory.name; // 1 задача
//console.log(inventory[0] ["name"], inventory[1] ["name"], inventory[2] ["name"]); {
//}
//-----------------------------------------------------------------------------------------------------------------
//function updateInventory(productId, amount)
    //let res = inventory.reduce((ac, a) => {  //Задача 2
        //let ind = ac.findIndex(x => x.id === a.id);
       // ind === -1 ? ac.push(a) : ac[ind].quantity += a.quantity;
       // return ac;
   // }, [])
//console.log(res);

//let updateInventory = (productId, amount) => {
//     let product = inventory.find((i) => i.id === productId)
//     if (!product) {
//         console.log('Product not found')
//         return
//     }
//
//     let nameProduct = product.name
//     let newQuantity = product.quantity + amount
//
//     product.quantity = product.quantity + amount /// product.quantity += amount
//     if (newQuantity < 0) {
//         console.log(`В инвентаре количество товара:"${nameProduct}" не может быть отрицательным`)
//     } else {
//         console.log(`Количество товара "${nameProduct}" = ${newQuantity}`)
//     }
// }
// updateInventory(3, 250)
// console.log(inventory)


//let updateInventory = (productId, amount) => {
//     let product = inventory.find((i) => i.id === productId)
//
//     if (product) {
//     product.quantity = Math.max(0, product.quantity + amount)
//     } else {
//         console.log(`Товар с ID ${productId} не найден в инвентаре.`)
//     }
// }
// updateInventory(3, -49)
// console.log(inventory)


//----------------------------------------------------------------------------------------
//function findLowStock(threshold) {


//const findLowStock = (threshold) => {
//     let products = inventory
//         .filter(i => i.quantity < threshold)
//         .map(i => i.name)
//     if (products.length > 0) {
//         console.log(`Товары с низким запасом: ${products}. Количество ниже ${threshold}.`)
//     } else {
//         console.log(`Нет товаров ниже установленного порога ${threshold}`)
//     }
//     return products
// }
// findLowStock(70)


//let findLowStock = (threshold) => {
//     return inventory
//         .filter(item => item.quantity > threshold)
//     .map(item => item.name)
// };
// console.log(findLowStock(100))


// let a = inventory.filter(inventory => Number(inventory.quantity) <= 0);
//
//     console.log(inventory.sort((a, b) => a.quantity - b.quantity)[0]['name']);

//------------------------------------------------------------------------------------------------


//    function totalInventoryValue() {
    //}

//   let totalInventoryValue = () => {
//     let totalValue = 0
//        for (let i = 0; i < inventory.length; i++) {
//            let allQuantity = inventory[i].quantity
//            let allPrice = inventory[i].price
//            if (allQuantity) {
//                totalValue += allPrice * allQuantity
//            }
//        }
//        console.log(totalValue)
//    }
//    totalInventoryValue()


    //let totalPrice = orders.reduce((total, order) => {
    //    return total + order.quantity;
  //  }, 0);
//console.log("Общая стоимость:", totalPrice);


let totalInventoryValue  = () => {
    return inventory.reduce((a, b) => {
        return a + (b.price * b.quantity)
    }, 0)
}
console.log(totalInventoryValue())