let user = {

}
console.log(user);
Object.defineProperty(user, 'age', {
    value: 25,
    enumerable: true,
    });
    console.log(Object.getOwnPropertyDescriptor(user, 'age'));
    
Object.defineProperty(user, 'name', {
        value: 'Max',
        enumerable: true,
    });
    console.log(Object.getOwnPropertyDescriptor(user, 'name'));

Object.defineProperty(user, 'id', {
        value: 123,
        enumerable: true,
    });
    console.log(Object.getOwnPropertyDescriptor(user, 'id'));