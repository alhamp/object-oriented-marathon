const Zoo = require('../Zoo');
const Employee = require('../Employee');
const Fox = require('../Fox');
const Snake = require('../Snake');
const Gorilla = require('../Gorilla');
const Cage = require('../Cage');

describe('A Zoo', () => {
  let zoo;

  beforeEach(() => {
    zoo = new Zoo('The First Zoo in Outer Space');
  });

  it('has a name', () => {
    expect(zoo.name).toEqual('The First Zoo in Outer Space');
  });

  it('should create 10 cages by default, and assign them to the cages property', () => {
    expect(zoo.cages).toHaveLength(10);
    expect(zoo.cages[0]).toBeInstanceOf(Cage);
  });

  describe('#addEmployee', () => {
    it('should be able to have employees', () => {
      const newEmployee = new Employee('Roger', 'Rabbit');
      zoo.addEmployee(newEmployee);

      expect(zoo.employees[0].firstName).toEqual('Roger');
    });
  });

  describe('#addEmployee', () => {
    it('should add an animal to the first open cage', () => {
      const newAnimal = new Fox('Kit');
      zoo.addAnimal(newAnimal);
      expect(zoo.cages[0].animal.name).toEqual('Kit');
    });

    it('should not add an animal to all of the open cages', () => {
      const newAnimal = new Fox('Kit');
      zoo.addAnimal(newAnimal);

      // expect(zoo.cages[1].animal.name).not.toEqual('Kit');
      expect(zoo.cages[1].animal).not.toEqual(newAnimal);
    });

    it('should return a message that all of the cages are full if cages are filled', () => {
      const newAnimal = new Fox('Kit');
      zoo.addAnimal(newAnimal);
      zoo.addAnimal(newAnimal);
      zoo.addAnimal(newAnimal);
      zoo.addAnimal(newAnimal);
      zoo.addAnimal(newAnimal);
      zoo.addAnimal(newAnimal);
      zoo.addAnimal(newAnimal);
      zoo.addAnimal(newAnimal);
      zoo.addAnimal(newAnimal);
      zoo.addAnimal(newAnimal);

      //called addAnimal as a function: ...addAnimal(newAnimal)
      expect(zoo.addAnimal(newAnimal)).toEqual('All of the cages are full!');
    });
  });

  describe('#visit', () => {
    it.only('should allow someone to visit and be greeted by each employee and animal', () => {
      const animalOne = new Snake('Sir Hiss');
      const animalTwo = new Gorilla('Bob');
      const employeeOne = new Employee('Jojo', 'The Great');
      const employeeTwo = new Employee('Derek', 'Zoolander');

      zoo.addAnimal(animalOne);
      zoo.addAnimal(animalTwo);
      zoo.addEmployee(employeeOne);
      zoo.addEmployee(employeeTwo);

      expect(zoo.visit()).toEqual('Sssssire, ssssire, they may be banditsssss\nBob got a bad feeling about this...\nJojo The Great waved hello!\nDerek Zoolander waved hello!');
    });
  });
});
