const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('Pit Pittman', '1234', 'pitpittman@test.com', 'University');

    expect(intern.getName()).toBe('Pit Pittman');
    expect(intern.getId()).toBe('1234');
    expect(intern.getEmail()).toBe('pitpittman@test.com');
    expect(intern.getRole()).toBe('Intern');
    expect(intern.getSchool()).toBe('University');
})