const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Jacob Jay', '1237', 'jacobjay@test.com', '456');

    expect(manager.getName()).toBe('Jacob Jay');
    expect(manager.getId()).toBe('1237');
    expect(manager.getEmail()).toBe('jacobjay@test.com');
    expect(manager.getRole()).toBe('Manager');
    expect(manager.officeNumber).toBe('456');
})