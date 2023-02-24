let user = {
    name:'Mike',
    surname:'Devis',
    age:25,
}   
//     get userInfo(){
//         for (const [key, value] of Object.entries(user)) {
//             console.log(`${key}: ${value}`);
//         }
//     }
// }, 
// user.userInfo;
// user.login = 'MK_18';
// user.userInfo;
function getObjectProperties(obj) {
    let result = '';
    for (let prop in obj) {
    result += (`${prop} : ${obj[prop]`)
    },
    
    return result.slice(0, -1);
};
    
    console.log(getObjectProperties(user))