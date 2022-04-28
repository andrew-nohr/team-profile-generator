const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('Big Buck', '1232', 'bigbuck@test.com', 'bigbuck');

    expect(engineer.getName()).toBe('Big Buck');
    expect(engineer.getId()).toBe('1232');
    expect(engineer.getEmail()).toBe('bigbuck@test.com');
    expect(engineer.getRole()).toBe('Engineer');
    expect(engineer.getGithub()).toBe('bigbuck');
})