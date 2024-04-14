
const product = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'
}

// fetch ('https://fakestoreapi.com/products', {
// method: 'POST',
// headers: {
//     'Content-Type': 'application/json'
// },
// body: JSON.stringify(product)

// })
// .then (response => response.json())
// .then (data => console.log(data))


// Приклад GET запиту

// fetch ('https://fakestoreapi.com/products')
// .then (response => response.json())
// .then (data => console.log(data))

// Перепишемо GET запит (без навішування then)

// async function getProducts () {
//     try {
//         const promiceResult = await fetch ('testhttps://fakestoreapi.com/products')
//     console.log(promiceResult);
//     const data = await promiceResult.json();
//     console.log(data);
//     } catch (error) {
//         // тут може бути якась обробка помилки
//         console.log(error);
//     }
// }

// getProducts();

// await працює тільки в асинхронних функціях!!! 
// async function name - це асинхронна функція 
// результат відловлюємо в змінну promiceResult
// у promiceResult треба визвати метод json (json повертає нам promise, який треба почекати -> await)
// Готові javaScript дані зберігаємо у змінну data


/* ДЗ
Якщо ви будете мати час та бажання, пропоную вам задачі на практику =)

Задача 1

Спробуйте зробити POST запит

https://fakestoreapi.com/products
Ви маєте отримати відповідь 200
В якості body передайте ось такий об'єкт:
const product = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'
}
*/

// fetch ('https://fakestoreapi.com/products', {
// method: 'POST',
// headers: {
//     'Content-Type' : 'application/json'
// },
// body: JSON.stringify(product)
// })
// .then (response => response.json())
// .then (data => console.log(data))


/*Задача 2
 Спробуйте зробити GET запит, 
 але використовуючи асинхронну функцію, синтаксис async..await */

async function getSomeProducts() {
    try {
        const productsResult = await fetch('https://fakestoreapi.com/products')
        const data = await productsResult.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getSomeProducts();