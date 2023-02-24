let dataBase = {
    dbName: 'user',
    dbType: 'MySQL',
}
Object.freeze(dataBase);
console.log(Object.isFrozen(dataBase)); 

let configurateDB = {
    token: '123',
    password: '567',
    user: 'admin',
}
Object.seal(configurateDB);
console.log(Object.isSealed(configurateDB)); 
