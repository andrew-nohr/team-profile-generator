const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('Apple Allen', '1232', 'appleallen@test.com', 'appleallenhub');

    expect(engineer.getName()).toBe('Apple Allen');
    expect(engineer.getId()).toBe('1232');
    expect(engineer.getEmail()).toBe('appleallen@test.com');
    expect(engineer.getRole()).toBe('Engineer');
    expect(engineer.getGithub()).toBe('appleallenhub');
})