const Cage = require('./Cage');
const Employee = require('./Employee')
class Zoo {
  constructor(name) {
    this.name = name;
    this.cages = [];
    this.createCages();
    this.employees =[];
  }

  createCages(numCages = 10) {
    for (let i = 0; i < numCages; i += 1) {
      this.cages.push(new Cage());
    }
  }

  addEmployee(newEmployee){
    this.employees.push(newEmployee)
  }
  addAnimal(newAnimal){
    if(this.cages[this.cages.length - 1]){
      return ('All of the cages are full!')
    }

    for (let i = 0; i < this.cages.length; i++){
      if(this.cages[i].isEmpty()){
        this.cages[i].animal = newAnimal
        break;
      }
    }
  }
  visit(){
    let message = []
    this.cages.forEach((cage) => {
      if(!cage.isEmpty()){
        message.push(cage.animal.speak())
      }

    })
    this.employees.forEach((employee) => {
      message.push(employee.greet())
    })
    return (message).join('\n')
  }
}
module.exports = Zoo;
