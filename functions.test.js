const functions = require('./functions');

// Executed before each test.
// beforeEach(() => initDatabase());
// Executed after each test.
// afterEach(() => closeDatabase());
// Executed before all tests start.
beforeAll(() => initDatabase());
// Executed after all tests stops.
afterAll(() => closeDatabase());

const initDatabase = () => console.log('Database Initialized..');
const closeDatabase = () => console.log('Database closed..');

// toBe matcher
test('This function adds two numbers', () =>{
    expect(functions.sum(1, 2)).toBe(3);
});

test('This function should wrongly substract two numbers', ()=> {
    expect(functions.sub(1, 2)).not.toBe(1);
});

test('This function multiplies two numbers', ()=>{
    expect(functions.mul(1, 2)).toBe(2);
});

// toBeNull matcher
test('This test is to check `toBeNull`', ()=>{
    expect(functions.isNull()).toBeNull();
});

// toBeFalsy matcher
test('To check `isFalsy` matcher', ()=>{
    expect(functions.checkValue(0)).toBeFalsy();
});

// This test will fail because `toBe` matches the memory addresses.
// test('check user to be `Aditya Kadu`', ()=>{
//     expect(functions.createUsr()).toBe({
//         firstName: 'Aditya',
//         lastName: 'Kadu'
//     });
// });

// toEqual matcher
test('check user to be `Aditya Kadu`', ()=>{
    expect(functions.createUsr()).toEqual({
        firstName: 'Aditya',
        lastName: 'Kadu'
    });
});

// `toBeLessThan` and `toBeGreaterThan` matchers
test('Test `toBeLessThan` and `toBeGreaterThan` matchers', ()=>{
    expect(functions.checkValue(2)).toBeLessThan(3);
    expect(functions.checkValue(2)).toBeGreaterThan(1);
});

// Regex
test('regex in jest', ()=>{
    expect('team').not.toMatch(/I/);
});
test('regex in jest', ()=>{
    expect('teamI').toMatch(/I/);
});
test('regex in jest', ()=>{
    expect('teami').toMatch(/I/i);
});

// Array
test('Array in jest', () =>{
  usernames = ['jhon', 'karen', 'admin'];
  expect(usernames).toContain('admin');  
});

// Promise
// test('Fetched name should be `Leanne Graham`', ()=>{
//     expect.assertions(1);
//     return functions.fetchUser().then(data=>{
//         expect(data.name).toEqual('Leanne Graham');
//     });
// });

// Async Await
test('Fetched name should be `Leanne Graham`', async ()=>{
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});
