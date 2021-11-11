class Employee {
    #firstName;
    #secondName;
    #departmentNumber;
    #position;
    #salary;
    #isFired;

    constructor(firstName, secondName, departmentNumber, position, salary, isFired) {
        this.#firstName = firstName;
        this.#secondName = secondName;
        this.#departmentNumber = departmentNumber;
        this.#position = position;
        this.#salary = salary;
        this.#isFired = isFired;
    }
}

export default Employee;