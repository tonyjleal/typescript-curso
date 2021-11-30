import { printObject, genericFunction, genericFunctionArrow }from '../generics/generics';
import { Villain, Hero } from '../interfaces';

// printObject(123);
// printObject(new Date());
// printObject({a:1,b:2,c:3});
// printObject([1,2,3,4,5,6]);
// printObject('Hola Mundo');

// const name: string = 'Fernando';

// console.log(genericFunctionArrow(new Date()).getDate());
// console.log(genericFunctionArrow(name).toUpperCase());
// console.log(genericFunctionArrow(3.141618).toFixed(2));

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLavel: 130,
}

console.log(genericFunctionArrow<Hero>(deadpool).realName);

