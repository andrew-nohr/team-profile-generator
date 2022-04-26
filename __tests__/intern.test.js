const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('Dell Dave', '1234', 'delldave@test.com', 'University');

    expect(intern.getName()).toBe('Dell Dave');
    expect(intern.getId()).toBe('1234');
    expect(intern.getEmail()).toBe('delldave@test.com');
    expect(intern.getRole()).toBe('Intern');
    expect(intern.getSchool()).toBe('University');
})