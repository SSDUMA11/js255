let user = {}
console.log(user);

Object.defineProperties(user, {
    name: { value: "Max", writable: false, enumerable: true, },
    age: { value: "25", writable: false, enumerable: true, },
    id: {value: 123, configurable: false,}
  });
    console.log(Object.getOwnPropertyDescriptor(user, 'name'));
    console.log(Object.getOwnPropertyDescriptor(user, 'age'));
    console.log(Object.getOwnPropertyDescriptor(user, 'id'));
 