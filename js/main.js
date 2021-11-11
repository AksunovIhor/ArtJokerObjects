import { Employee } from './employee.js';
import { Department } from './department.js';

class Restaurant {
    #employeesArray;
    #departmentArray;

    constructor(employeesArray, departmentArray) {
        this.#employeesArray = employeesArray;
        this.#departmentArray = departmentArray;
    }
}

let emp = new Employee("abc", "cba", 1, "dog", 123, false);
console.log(emp);
