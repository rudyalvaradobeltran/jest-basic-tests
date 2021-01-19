const reverseString = require('./reverseString')

test('reverseString function exists', () => {
    expect(reverseString).toBeDefined()    
})

test('String reverses', () => {
    expect(reverseString('holi')).toEqual('iloh')
})

test('String reverses with uppercase', () => {
    expect(reverseString('Holi')).toEqual('iloh')
})