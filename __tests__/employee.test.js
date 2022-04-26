const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Microsoft Bob', '1234', 'microsoftbob@test.com');

    expect(employee.getName()).toBe('Microsoft Bob');
    expect(employee.getId()).toBe('1234');
    expect(employee.getEmail()).toBe('microsoftbob@test.com');
    expect(employee.getRole()).toBe('Employee');
})