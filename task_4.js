let user = {
    name:'Mike',
    surname:'Devis',
    age:25,
}   
function getObjectProperties(obj) {
    let result = '';
    for (let prop in obj) {
    result += (`${prop}: ${obj[prop]},`)
    }
    return result.slice(0, -1);
};
console.log(getObjectProperties(user));
user.login = 'MK_18';
console.log(getObjectProperties(user));

