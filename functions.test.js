const functions = require('./functions')

//Run code before and after each test
// beforeEach(() => initDatabase())
// afterEach(() => closeDatabase())

//Run code before all and after all tests
// beforeAll(() => initDatabase())
// afterAll(() => closeDatabase())

// const initDatabase = () => console.log('Database Initialized...')
// const closeDatabase = () => console.log('Database Closed...')

//Check user before each test
const nameCheck = () => console.log('Checking name...')
describe('Checking Names', () => {
    beforeEach(() => nameCheck())
    test('User is Rudy', () => {
        const user = 'Rudy'
        expect(user).toBe('Rudy')
    })
})

//4
test('Adds 2 + 2 to equals 4', () => {
    expect(functions.add(2, 2)).toBe(4)
})

//Not 5 
test('Adds 2 + 2 to NOT equals 5', () => {
    expect(functions.add(2, 2)).not.toBe(5)
})

//Null
test('Should be null', () => {
    expect(functions.isNull()).toBeNull()
})

//Falsy
test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy()
})

//Object
test('Should be Rudy Esteban object', () => {
    expect(functions.createUser()).toEqual({ firstName: 'Rudy', middleName: 'Esteban' })
})

//Less and greater than
test('Should be under 1600', () => {
    const load1 = 800
    const load2 = 700
    expect(load1+load2).toBeLessThan(1600)
})

//Regex
test('There is no B in avocado', () => {
    expect('avocado').not.toMatch(/B/i)
})

//Array
test('Admin should be in usernames', () => {
    usernames = ['john', 'maria', 'admin']
    expect(usernames).toContain('admin')
})

//Promise
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1)
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham')
        })
})

//Async await
test('User fetched name should be Leanne Graham', async() => {
    expect.assertions(1)
    const data = await functions.fetchUser()
    expect(data.name).toEqual('Leanne Graham')
})