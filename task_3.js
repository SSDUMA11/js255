let salaries = {
    frontend: 2000,
    backend: 1500,
    design: 1000,
}
Object.defineProperty(salaries, 'sum', {
    get(){
        let sum = 0;
        for(salaries in this){
            if(typeof this[key] === "number"){
                 sum += this[key];
            }  
        }
        console.log(sum);
    },
    enumerable: false      
});

Object.defineProperty(salaries, "addSalaries", {
    set(value) {
      if (Array.isArray(value)) {
        value.forEach((item) => {
          const [position, salary] = item.split(":");
          if (position && salary && salaries.hasOwnProperty(position)) {
            salaries[position] = Number(salary);
          } else {
            salaries[position] = Number(salary);
            Object.defineProperty(salaries, position, {
              enumerable: true,
              configurable: true,
              writable: true,
            });
          }
        });
      }
    },
    enumerable: true,
    configurable: true,
  });

  salaries.addSalaries = ["frontend:3000", "backend:2000", "marketing:2500"];
  console.log(salaries);
