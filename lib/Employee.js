class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee"
    }
}

module.exports = Employee;

// new Employee('Aaron', 1, 'aaron@mail.com');
const employees = [1, 2, 3];

// employees.map(employee => employee.getName())